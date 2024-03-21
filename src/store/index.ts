import { configureStore } from "@reduxjs/toolkit";
import searchReduce from "./searchSlice";
import favoriteReducer from "./favoriteSlice";
import vehicleMakesReducer from "./vehicleMakeSlice";
import vehicleModelsReducer from "./vehicleModelSlice";
import vehiclesReducer from "./vehicleSlice";

export const store = configureStore({
  reducer: {
    search: searchReduce,
    favorite: favoriteReducer,
    vehicleMakes: vehicleMakesReducer,
    vehicleModels: vehicleModelsReducer,
    vehicles: vehiclesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState =  ReturnType<typeof store.getState>
