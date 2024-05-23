import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "reactfire";
import { AppDispatch } from "../../store";
import { fetchFeaturedVehicles, VehicleState } from "../../store/vehicleSlice";
import VehicleCard from "../vehicle/VehicleCard";

export default function DealsOfTheDay({ className }: { className: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();
  const { featuredVehicles, loading } = useSelector(
    (state: { vehicles: VehicleState }) => state.vehicles
  );

  useEffect(() => {
    dispatch(fetchFeaturedVehicles({ firestore }));
  }, []);

  return (
    <section
      className={`px-5 pt-16 pb-10 large-container ${className} ${
        !loading && !featuredVehicles.length ? "hidden" : ""
      }`}
    >
      <h5 className="mb-6 text-2xl font-bold text-center">Deals of the day</h5>

      <div className="mt-3">
        <div className="grid grid-cols-12 mt-10 gap-5 justify-between">
          {loading && "Loading..."}
          {!loading &&
            featuredVehicles.map((vehicle) => (
              <div
                className="col-span-12 sm:col-span-6 lg:col-span-4"
                key={vehicle.id}
              >
                <VehicleCard vehicle={vehicle} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
