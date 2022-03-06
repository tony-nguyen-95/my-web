import { createStore, combineReducers } from "redux";
import TabsReducer from "./Reducers/TabsReducer";
import ThemeReducer from "./Reducers/ThemeReducer";

const rootReducer = combineReducers({
  //Container for all states of app

  ThemeReducer,
  TabsReducer,
});

export const store = createStore(rootReducer);
