import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { filmAPI } from "../services/FilmServises";
import { getRandNum } from "../services/RandomOrgAPI";

const rootReducer = combineReducers({
  [filmAPI.reducerPath]: filmAPI.reducer,
  [getRandNum.reducerPath]: getRandNum.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(filmAPI.middleware, getRandNum.middleware),
  });
};
