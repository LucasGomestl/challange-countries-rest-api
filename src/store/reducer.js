const INITIAL_STATE = {
  countryList: [],
  searchTextInput: "",
  searchSelectInput: "default",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEARCH_COUNTRIES":
      return { ...state, countryList: action.payload };
    case "UPDATE_SEARCH_TEXT_INPUT":
      return { ...state, searchTextInput: action.payload };
    case "UPDATE_SELECT_TEXT_INPUT":
      return { ...state, searchSelectInput: action.payload };
    case "FILTER_BY_REGION":
      return { ...state, countryList: action.payload };
    default:
      return state;
  }
};
