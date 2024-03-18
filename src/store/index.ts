import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./searchSlice";
import favoriteReducer from "./favoriteSlice";
import vehicleMakesReducer from "./vehicleMakeSlice";

export const store = configureStore({
  reducer: {
    search: searchReduce,
    favorite: favoriteReducer,
    vehicleMakes: vehicleMakesReducer,
  },
});

export type AppDispatch = typeof store.dispatch