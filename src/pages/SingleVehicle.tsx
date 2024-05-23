import { useFirestore } from "reactfire";
import { Breadcrumb, Accordion } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "../components/top-level/Drawer";
import { useParams } from "react-router-dom";
import { numberFormat } from "../helpers/utils";
import VehicleGallery from "../components/vehicle/vehicleGallery";
import VehicleInfoTable from "../components/vehicle/VehicleInfoTable";
import VehicleCard from "../components/vehicle/VehicleCard";
import { AppDispatch } from "../store";
import {
  fetchVehicle,
  fetchVehicles,
  VehicleState,
} from "../store/vehicleSlice";

export default function SingleVehicle() {
  const [openSpecificationsDrawer, setOpenSpecificationsDrawer] =
    useState(false);

  const [openCostsDrawer, setOpenCostsDrawer] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const {
    vehicle: vehicleData,
    loading,
    vehicles,
  } = useSelector((state: { vehicles: VehicleState }) => state.vehicles);

  const params = useParams();
  const vehicleSlug = params.slug;

  useEffect(() => {
    if (vehicleSlug) {
      dispatch(fetchVehicle({ firestore, vehicleSlug }));
    }
    if(!vehicles.length) {
      dispatch(fetchVehicles({ firestore }));
    }
  }, []);

  const similarVehicles = vehicles
    .filter(({ slug }) => slug !== vehicleSlug)
    .sort((a) => a.price - (vehicleData?.price || 0))
    .sort((_, b) => (b.make === vehicleData?.make ? 1 : -1))
    .slice(0, 3);

  return (
    <section className="px-3 md:px-5 py-5 max-w-[1600px] mx-auto">
      {loading && "Loading ..."}
      {!loading && vehicleData && (
        <div>
          <Breadcrumb aria-label="Default breadcrumb example">
            <Breadcrumb.Item href="/" icon={IconMaterialSymbolsHome}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/vehicles">Vehicles</Breadcrumb.Item>
            <Breadcrumb.Item>{vehicleData?.name}</Breadcrumb.Item>
          </Breadcrumb>

          <div className="grid grid-cols-12 mt-5 gap-x-5 gap-y-14">
            <div className="col-span-12 lg:col-span-6 2xl:col-span-5">
              <VehicleGallery images={vehicleData?.vehicle_images || []} />
              <div className="mt-2">
                <p className="font-bold text-lg">
                  {vehicleData.currency} {numberFormat(vehicleData.price)}
                </p>
              </div>
              <div className="mt-5">
                <VehicleInfoTable vehicleData={vehicleData} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 2xl:col-span-7">
              <h3 className="font-bold text-3xl ">{vehicleData?.name}</h3>
              <p className="mt-3 text-gray-300 text-lg">
                {vehicleData?.description}
              </p>
              <div className="mt-5">
                <div
                  className="border border-gray-600 p-3 md:px-5 rounded text-gray-200 text-lg flex items-center cursor-pointer"
                  onClick={() => setOpenSpecificationsDrawer(true)}
                >
                  Specifications
                  <span className="ml-auto">
                    <IconMaterialSymbolsChevronRight />
                  </span>
                </div>
                <div
                  className="border border-gray-600 p-3 md:px-5 rounded text-gray-200 text-lg flex items-center cursor-pointer mt-4"
                  onClick={() => setOpenCostsDrawer(true)}
                >
                  Running Costs
                  <span className="ml-auto">
                    <IconMaterialSymbolsChevronRight />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {!!similarVehicles.length && (
            <div className="mt-20">
              <h3 className="font-bold text-3xl text-center">
                Similar vehicles
              </h3>
              <p className="text-center mt-2 text-lg text-gray-400">
                people who viewed {vehicleData?.name} also viewed these vehicles
              </p>
              <div className="grid grid-cols-12 mt-8 gap-x-5 gap-y-14">
                {similarVehicles.map((vehicle) => (
                  <div
                    className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3"
                    key={vehicle.id}
                  >
                    <VehicleCard vehicle={vehicle} />
                  </div>
                ))}
              </div>
            </div>
          )}
          <Drawer
            openDrawer={openSpecificationsDrawer}
            onClose={() => setOpenSpecificationsDrawer(false)}
          >
            <div className="px-2">
              <h6 className="text-xl font-bold pb-4 border-none">
                {vehicleData?.name}
              </h6>
              <Accordion className="border-none">
                <Accordion.Panel>
                  <Accordion.Title>Comfort features</Accordion.Title>
                  <Accordion.Content></Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                  <Accordion.Title>Safety features</Accordion.Title>
                  <Accordion.Content></Accordion.Content>
                </Accordion.Panel>
              </Accordion>
            </div>
          </Drawer>

          <Drawer
            openDrawer={openCostsDrawer}
            onClose={() => setOpenCostsDrawer(false)}
          >
            <div className="px-2 flex flex-col h-full">
              <h6 className="text-xl font-bold pb-4 border-none">
                {vehicleData?.name}
              </h6>
              <div className="flex flex-1 flex-col gap-y-3">
                <div className="flex flex-1 items-center justify-center bg-dark">
                  <div className="text-center">
                    <IconMaterialSymbolsShield className="text-4xl text-white mx-auto" />
                    <p className="text-xl text-white mt-2 font-semibold">
                      Insurance
                    </p>
                    <p className="mt-3 text-gray-400">
                      (Approximate cost. Amount may change depending on insurer)
                    </p>
                    <p className="mt-2">
                      {vehicleData?.currency}{" "}
                      {numberFormat(vehicleData.annual_insurance)}
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 bg-dark items-center justify-center">
                  <div className="text-center">
                    <IconBiFuelPump className="text-4xl text-white mx-auto" />
                    <p className="text-xl text-white mt-2 font-semibold">
                      Fuel consumption
                    </p>
                    {vehicleData.fuel_consumption?.highway_consumption && (
                      <p className="mt-3 text-gray-200">
                        Highway:{" "}
                        {vehicleData?.fuel_consumption?.highway_consumption} /{" "}
                        {vehicleData?.fuel_consumption?.fuel_unit}
                      </p>
                    )}
                    {vehicleData.fuel_consumption?.urban_consumption && (
                      <p className="mt-2">
                        Urban:{" "}
                        {vehicleData?.fuel_consumption?.urban_consumption} /{" "}
                        {vehicleData?.fuel_consumption?.fuel_unit}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
        </div>
      )}
    </section>
  );
}
