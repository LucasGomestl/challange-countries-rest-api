export const getCountries = (countryName = "", region = "default") => ({
  type: "SEARCH_COUNTRIES",
  countryName,
  region,
});

export const setCountries = (results) => ({
  type: "SET_COUNTRIES",
  payload: results,
});

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
