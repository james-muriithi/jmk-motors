import { createSlice } from "@reduxjs/toolkit";
import { carMakes } from "../data";

export interface SearchState {
  make?: string;
  model?: string;
  minYom?: number;
  maxYom?: number;
  minPrice?: number;
  maxPrice?: number;
  minMileage?: number;
  maxMileage?: number;
  transmission?: string;
}

const initialState: SearchState = {
  make: "",
  model: "",
  minPrice: 0,
  minMileage: 0,
  transmission: "automatic",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setMake: (state, action) => {
      if (state.model) state.model = "";
      if (!carMakes.find(({ value }) => value === action.payload)) return;
      state.make = action.payload;
    },
    setModel: (state, action) => {
      if (!state.make) return;
      const makeData = carMakes.find(({ value }) => value === state.make);
      if (
        !makeData ||
        !makeData.models.find(({ value }) => value === action.payload)
      )
        return;
      state.model = action.payload;
    },
    setMinYom: (state, action) => {
      state.minYom = Number(action.payload);
    },
    setMaxYom: (state, action) => {
      state.maxYom = Number(action.payload);
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    setMinMileage: (state, action) => {
      state.minMileage = action.payload;
    },
    setMaxMileage: (state, action) => {
      state.maxMileage = action.payload;
    },
    setTransmission: (state, action) => {
      state.transmission = action.payload;
    },
  },
});

export const {
  setMake,
  setModel,
  setMinYom,
  setMaxYom,
  setMinPrice,
  setMaxPrice,
  setMinMileage,
  setMaxMileage,
  setTransmission,
} = searchSlice.actions;

export default searchSlice.reducer;
