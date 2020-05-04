import axios from "axios";

const URL = "https://restcountries.eu/rest/v2";
let request = [];

export function getCountries(countryName = "", region = "default") {
  //Get All
  if (countryName === "" && region === "default") {
    request = axios.get(URL + "/all");
    //Get by name
  } else if (region === "default") {
    axios
      .get(URL + "/name/" + countryName)
      .then((response) => {
        request = response;
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log("There are no countries matching this criteria!");
        }
      });
  } else {
    //Get by region and name
    request = filterByRegion(countryName, region);
  }

  //USAR O SAGA
  return {
    type: "SEARCH_COUNTRIES",
    payload: request,
  };
}

async function filterByRegion(countryName, region = "default") {
  let countriesList = {
    data: [],
  };
  //Get by region
  if (countryName === "") {
    countriesList = await axios.get(URL + "/region/" + region);
  } else {
    await axios
      .get(URL + "/name/" + countryName)
      .then((response) => {
        response.data.map((country) => {
          if (country.region.toLowerCase() === region) {
            countriesList.data.push(country);
          }
          return 0;
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          console.log("There are no countries matching this criteria!");
        }
      });
  }
  return countriesList;
}

export function updateSearchTextInput(e) {
  return {
    type: "UPDATE_SEARCH_TEXT_INPUT",
    payload: e,
  };
}

export function updateSearchSelectInput(e) {
  return {
    type: "UPDATE_SELECT_TEXT_INPUT",
    payload: e,
  };
}
