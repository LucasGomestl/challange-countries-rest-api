const INITIAL_STATE = {
  countryList: [],
  message: "",
  searchTextInput: "",
  searchSelectInput: "default",
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_COUNTRIES":
      return { ...state, countryList: action.payload };
    case "UPDATE_SEARCH_TEXT_INPUT":
      return { ...state, searchTextInput: action.payload };
    case "UPDATE_SELECT_TEXT_INPUT":
      return { ...state, searchSelectInput: action.payload };
    default:
      return state;
  }
};
