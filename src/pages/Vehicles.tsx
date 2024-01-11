import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "../data";

export default function Vehicles() {
  return (
    <section className="px-5 py-5 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-12 mt-10 gap-5 justify-between">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
          <FiltersCard />
        </div>
        {vehicles.map((vehicle) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3"
            key={vehicle.id}
          >
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </section>
  );
}
