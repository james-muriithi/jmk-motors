import { RootState } from "./index";
import {
  collection,
  doc,
  Firestore,
  getDoc,
  getDocs,
  limit,
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
  featuredVehicles: Vehicle[];
}

const initialState: VehicleState = {
  loading: false,
  vehicles: [],
  featuredVehicles: [],
  vehicle: null,
};

interface FetchVehiclesParams extends Partial<SearchState> {
  firestore: Firestore;
  size?: number;
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
      vehiclesQuery = query(
        vehiclesQuery,
        where("model", "==", model),
        where("make", "==", make)
      );
    } else if (make && !model) {
      vehiclesQuery = query(vehiclesQuery, where("make", "==", make));
    }
    const vehicleDocs = await getDocs(vehiclesQuery);
    return vehicleDocs.docs.map(firestoreDocToJson) as unknown as Vehicle[];
  }
);

export const fetchFeaturedVehicles = createAsyncThunk<any, FetchVehiclesParams>(
  "vehicles/fetchFeaturedVehicles",
  async ({ firestore, size = 3 }) => {
    const vehicleCollectionRef = collection(firestore, "vehicles");
    let vehiclesQuery = query(
      vehicleCollectionRef,
      where("is_featured", "==", true),
      orderBy("created_at", "desc"),
      limit(size)
    );

    const vehicleDocs = await getDocs(vehiclesQuery);
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
      })
      .addCase(fetchFeaturedVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFeaturedVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.featuredVehicles = action.payload;
      })
      .addCase(fetchFeaturedVehicles.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      });
  },
});

export const { setVehicleData } = vehicleSlice.actions;

export default vehicleSlice.reducer;
