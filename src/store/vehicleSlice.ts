import {
  collection,
  Firestore,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Vehicle } from "../types/Vehicle";
import { SearchState } from "./searchSlice";
import { firestoreDocToJson } from "../utils/firebase";

export interface VehicleState {
  loading: boolean;
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  loading: false,
  vehicles: [],
};

interface FetchVehiclesParams extends Partial<SearchState> {
  firestore: Firestore;
}

export const fetchVehicles = createAsyncThunk(
  "vehicles/fetchVehicles",
  async ({ firestore, model, make }: FetchVehiclesParams) => {
    const vehicleCollectionRef = collection(firestore, "vehicles");
    let vehiclesQuery = query(vehicleCollectionRef);
    if (model && make) {
        vehiclesQuery = query(vehicleCollectionRef, where("model", "==", model))
    } else if(make && !model) {
        vehiclesQuery = query(vehicleCollectionRef, where("make", "==", make))
    }
    const vehicleDocs = await getDocs(vehiclesQuery);
    console.log(vehicleDocs.docs.length, make, model)
    return vehicleDocs.docs.map(firestoreDocToJson) as Vehicle[];
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message)
      });
  },
});

export default vehicleSlice.reducer;
