import { createStore, combineReducers } from "redux";
import ThemeReducer from "./Reducers/ThemeReducer";

const rootReducer = combineReducers({
  //Container for all states of app

  ThemeReducer,
});

export const store = createStore(rootReducer);
