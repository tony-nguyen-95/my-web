const initialState = {
  tabChosen: "Home",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "HOME_TAB":
      return { ...state, tabChosen: "Home" };
    case "ABOUT_TAB":
      return { ...state, tabChosen: "About" };
    case "CONTACT_TAB":
      return { ...state, tabChosen: "Contact" };
    default:
      return state;
  }
};
