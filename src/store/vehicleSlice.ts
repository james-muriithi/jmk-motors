import { RootState } from "./index";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  orderBy,
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
  vehicle: Vehicle | null | undefined;
}

const initialState: VehicleState = {
  loading: false,
  vehicles: [],
  vehicle: null,
};

interface FetchVehiclesParams extends Partial<SearchState> {
  firestore: Firestore;
}

interface FetchVehicleParams {
  firestore: Firestore;
  vehicleSlug: string;
}

export const fetchVehicle = createAsyncThunk<
  any,
  FetchVehicleParams,
  { state: RootState }
>(
  "vehicles/fetchSingleVehicle",
  async ({ firestore, vehicleSlug }, { getState }) => {
    if (!vehicleSlug) return;
    const { vehicles: vehiclesState } = getState();

    const vehicle = vehiclesState?.vehicles?.find(
      ({ slug }) => slug === vehicleSlug
    );

    if (vehicle) return vehicle;

    const vehicleDoc = await getDoc(doc(firestore, "vehicles", vehicleSlug));
    if (!vehicleDoc.exists()) {
      throw new Error("Vehicle not found");
    }
    return firestoreDocToJson(vehicleDoc) as unknown as Vehicle;
  }
);

export const fetchVehicles = createAsyncThunk<any, FetchVehiclesParams>(
  "vehicles/fetchVehicles",
  async ({ firestore, model, make }) => {
    const vehicleCollectionRef = collection(firestore, "vehicles");
    let vehiclesQuery = query(
      vehicleCollectionRef,
      orderBy("created_at", "desc")
    );
    if (model && make) {
      vehiclesQuery = query(vehicleCollectionRef, where("model", "==", model));
    } else if (make && !model) {
      vehiclesQuery = query(vehicleCollectionRef, where("make", "==", make));
    }
    const vehicleDocs = await getDocs(vehiclesQuery);
    console.log(vehicleDocs.docs.length, make, model);
    return vehicleDocs.docs.map(firestoreDocToJson) as unknown as Vehicle[];
  }
);

const vehicleSlice = createSlice({
  name: "vehicle",
  initialState,
  reducers: {
    setVehicleData(
      state,
      action: { payload: { slug: string; firestore: Firestore } }
    ) {
      const vehicle = state.vehicles.find(
        ({ slug }) => slug === action.payload.slug
      );
      if (vehicle) {
        state.vehicle = vehicle;
      } else {
        fetchVehicle({
          firestore: action.payload.firestore,
          vehicleSlug: action.payload.slug,
        });
      }
    },
  },
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
        console.log(action.error.message);
      })
      .addCase(fetchVehicle.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchVehicle.fulfilled, (state, action) => {
        state.loading = false;
        state.vehicle = action.payload;
      })
      .addCase(fetchVehicle.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });
  },
});

export const { setVehicleData } = vehicleSlice.actions;

export default vehicleSlice.reducer;
