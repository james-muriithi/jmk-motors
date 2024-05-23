import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "reactfire";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AppDispatch } from "../../store";
import { fetchFeaturedVehicles, VehicleState } from "../../store/vehicleSlice";
import VehicleCard from "../vehicle/VehicleCard";
import "./DealsOfTheDay.scss";

export default function DealsOfTheDay({ className }: { className: string }) {
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();
  const { featuredVehicles, loading } = useSelector(
    (state: { vehicles: VehicleState }) => state.vehicles
  );

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(fetchFeaturedVehicles({ firestore, size: 6 }));
  }, []);

  return (
    <section
      className={`px-3 pt-5 large-container ${className} ${
        !loading && !featuredVehicles.length ? "hidden" : ""
      }`}
    >
      <h5 className="text-2xl font-bold text-center">Deals of the day</h5>

      <div className="mt-3">
        <div className="mt-6 gap-5 justify-between">
          {loading && <div className="px-3">Loading...</div>}
          {!loading && (
            <Carousel responsive={responsive} autoPlay rewind rewindWithAnimation>
              {featuredVehicles.map((vehicle) => (
                <div className="h-full mx-2" key={vehicle.id}>
                  <VehicleCard vehicle={vehicle} />
                </div>
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
