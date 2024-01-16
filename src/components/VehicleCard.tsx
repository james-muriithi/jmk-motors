import { Link } from "react-router-dom";
import { Badge, Button } from "flowbite-react";
import { Vehicle } from "../types/Vehicle";
import { numberFormat } from '../helpers/utils';

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  const isFavorite = vehicle.is_favorite;

  return (
    <div className="w-full rounded-lg dark:bg-gray-800 dark:border-gray-800 h-full flex flex-col">
      <div className="object-cover relative">
        <Badge
          color=""
          className="absolute top-2 left-2 shadow rounded-full px-3 bg-white text-dark"
        >
          {vehicle.year_of_manufacture}
        </Badge>
        <Link to={`/vehicles/${vehicle.slug}`}>
          <img
            className="rounded-t-lg object-cover h-72 w-full"
            src={vehicle.thumbnail}
            alt={vehicle.name}
          />
        </Link>
        <Button
          className="absolute right-2 top-2 rounded-full bg-white text-dark w-10 h-10"
          size="sm"
          color=""
        >
          {isFavorite ? (
            <IconIcBaselineFavorite className="text-lg" />
          ) : (
            <IconIcOutlineFavoriteBorder className="text-lg" />
          )}
        </Button>
      </div>
      <div className="py-5 mt-2 flex flex-col h-full">
        <Link to={`/vehicles/${vehicle.slug}`} className="px-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {vehicle.name}
          </h5>
        </Link>
        <div className="mt-5 px-5">
          <div className="flex gap-x-3 gap-y-2 flex-wrap">
            <Badge color="gray" className="shadow rounded-full px-4 py-1">
              {numberFormat(vehicle.mileage)} km
            </Badge>
            <Badge color="gray" className="shadow rounded-full px-4 py-1">
              Locally used
            </Badge>
            <Badge color="green" className="shadow rounded-full px-4 py-1">
              Available
            </Badge>
          </div>
        </div>
        <div className="mt-4 px-5 mb-4">
          <p className="line-clamp-3 text-gray-300 lg:line-clamp-4">
            {vehicle.description}
          </p>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-700">
          <div className="flex justify-between items-center px-5">
            <div>
              <p className="font-bold text-gray-300">
                {vehicle.currency} {numberFormat(vehicle.price)}
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
