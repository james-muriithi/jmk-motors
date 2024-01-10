import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/VehicleCard";

export default function Vehicles() {
  return (
    <section className="px-5 py-5 ">
      <div className="grid grid-cols-12 mt-10 gap-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
          <FiltersCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-3">
          <VehicleCard />
        </div>
      </div>
    </section>
  );
}
