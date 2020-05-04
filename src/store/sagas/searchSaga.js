import { takeLatest, put, call } from "redux-saga/effects";
import { setCountries } from "../actions";
import axios from "axios";

const URL = "https://restcountries.eu/rest/v2";
let request = [];
function* getCountries({ countryName, region }) {
  //Get All
  if (countryName === "" && region === "default") {
    request = yield axios.get(URL + "/all");
    yield put(setCountries(request));
    //Get by name
  } else if (region === "default") {
    axios
      .get(URL + "/name/" + countryName)
      .then((response) => {
        request = response;
      })
      .catch((error) => {
        if (error.response.status === 404) {
        }
      });
  } else {
    //Get by region and name
    request = yield filterByRegion(countryName, region);
  }
  yield call(delay, 250);
  yield put(setCountries(request));
}

function filterByRegion(countryName, region = "default") {
  let countriesList = {
    data: [],
  };
  //Get by region
  if (countryName === "") {
    countriesList = axios.get(URL + "/region/" + region);
  } else {
    axios
      .get(URL + "/name/" + countryName)
      .then((response) => {
        response.data.map((country) => {
          if (country.region.toLowerCase() === region) {
            countriesList.data.push(country);
          }
          return [];
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
        }
      });
  }
  return countriesList;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
function* watchSearch() {
  yield takeLatest("SEARCH_COUNTRIES", getCountries);
}

export default watchSearch;
