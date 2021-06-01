const themes = [
  {
    name: "lightTheme",
    primaryColor: "#ffffff",
    secondaryColor: "#000000",
    buttonColor: "#757575",
  },
  {
    name: "darkTheme",
    primaryColor: "#000000",
    secondaryColor: "#ffffff",
    buttonColor: "#a3a3a3",
  },
];

const initialState = {
  selectedTheme: themes[0],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME": {
      if (state.selectedTheme.name === "lightTheme") {
        return { ...state, selectedTheme: themes[1] };
      } else {
        return { ...state, selectedTheme: themes[0] };
      }
    }

    default:
      return state;
  }
};
