import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./searchSlice";

export const store = configureStore({
  reducer: {
    search: searchReduce,
  },
  
});
