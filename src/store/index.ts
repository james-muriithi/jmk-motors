import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./searchSlice";
import favoriteReducer from "./favoriteSlice";

export const store = configureStore({
  reducer: {
    search: searchReduce,
    favorite: favoriteReducer,
  },
});
