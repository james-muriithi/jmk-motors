import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/VehicleCard";
import { Vehicle } from "../types/Vehicle";

export default function Vehicles() {
  const vehicles: Vehicle[] = [
    {
      id: 1,
      thumbnail:
        "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20240109-WA0177.jpg",
      name: "Audi A3 Sedan 1.4T 'Typ 8V'",
      year_of_manufacture: 2015,
      mileage: 72000,
      price: 1800000,
      currency: "KES",
      is_favorite: false,
      is_available: true,
      is_locally_used: true,
      description:
        "This is the cleanest Audi A3 we have for you running a 1.4L Turbocharged Fuel Stratified Injection doing 150hp and 250Nm of torque. It features a MacPherson strut suspension in the front and Multi-link rear suspension in the rear with models with less than 148hp having torsion bar suspension. On the interior, it has fabric seats, a 5.8-inch display, and a 6-speaker stereo system. It also has a 7-speed S-Tronic dual-clutch transmission.",
    },
  ];
  return (
    <section className="px-5 py-5 ">
      <div className="grid grid-cols-12 mt-10 gap-5">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3">
          <FiltersCard />
        </div>
        {vehicles.map((vehicle) => (
          <div
            className="col-span-12 sm:col-span-6 lg:col-span-5 xl:col-span-4 2xl:col-span-3"
            key={vehicle.id}
          >
            <VehicleCard vehicle={vehicle} />
          </div>
        ))}
      </div>
    </section>
  );
}
