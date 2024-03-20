import { collection, getDocs, where, query } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestoreDocToJson } from "../utils/firebase";
import { CarModel } from "../types/Vehicle";

export const fetchVehicleModels = createAsyncThunk(
  "vehicle/fetchModels",
  async ({ firestore, makeId }: { firestore: Firestore; makeId?: string }) => {
    if (makeId) {
      const modelsCollectionRef = collection(firestore, "models");
      const modelsQuery = query(
        modelsCollectionRef,
        where("make", "==", makeId)
      );
      const modelDocs = await getDocs(modelsQuery);
      return modelDocs.docs.map(firestoreDocToJson) as CarModel[];
    }
  }
);

export interface ModelState {
  loading: boolean;
  models: CarModel[];
  error: null | boolean;
}

const initialState: ModelState = {
  loading: false,
  models: [],
  error: null,
};

const vehicleModelSlice = createSlice({
  name: "make",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleModels.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicleModels.fulfilled, (state, action) => {
        state.loading = false;
        state.models = action.payload || [];
      })
      .addCase(fetchVehicleModels.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default vehicleModelSlice.reducer;
