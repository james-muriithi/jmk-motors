import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./searchSlice";
import favoriteReducer from "./favoriteSlice";
import vehicleMakesReducer from "./vehicleMakeSlice";
import vehicleModelsReducer from "./vehicleModelSlice";

export const store = configureStore({
  reducer: {
    search: searchReduce,
    favorite: favoriteReducer,
    vehicleMakes: vehicleMakesReducer,
    vehicleModels: vehicleModelsReducer,
  },
});

export type AppDispatch = typeof store.dispatch