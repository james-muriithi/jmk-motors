import { Link } from "react-router-dom";
import { Badge } from "flowbite-react";

export default function VehicleCard() {
  return (
    <div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-800 h-full">
      <div className="object-cover relative">
        <Badge color="" className="absolute top-2 left-2 shadow rounded-full px-3 bg-white text-dark">2015</Badge>
        <Link to="#">
          <img
            className="rounded-t-lg object-cover h-72 w-full"
            src="https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20240109-WA0177.jpg"
            alt=""
          />
        </Link>
      </div>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white">
            Audi A3
          </h5>
        </a>
      </div>
    </div>
  );
}
