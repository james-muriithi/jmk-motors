import { collection, getDocs } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firestoreDocToJson } from "../utils/firebase";
import { CarMake } from "../types/Vehicle";

export const fetchVehicleMakes = createAsyncThunk(
  "vehicle/fetchMakes",
  async ({ firestore }: { firestore: Firestore }) => {
    const makesCollectionRef = collection(firestore, "makes");
    const makeDocs = await getDocs(makesCollectionRef);
    return makeDocs.docs.map(firestoreDocToJson) as CarMake[];
  }
);

export interface MakeState {
  loading: boolean;
  makes: CarMake[];
  error: null | boolean;
}

const initialState: MakeState = {
  loading: false,
  makes: [],
  error: null,
};

const vehicleMakeSlice = createSlice({
  name: "make",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicleMakes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicleMakes.fulfilled, (state, action) => {
        state.loading = false;
        state.makes = action.payload;
      })
      .addCase(fetchVehicleMakes.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        console.log(action.error.message);
      });
  },
});

export default vehicleMakeSlice.reducer;
