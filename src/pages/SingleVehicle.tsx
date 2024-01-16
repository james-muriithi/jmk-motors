import { Breadcrumb, Accordion } from "flowbite-react";
import { useState } from "react";
import Drawer from "../components/top-level/Drawer";
import { vehicles } from "../data";
import { useNavigate, useParams } from "react-router-dom";
import { numberFormat } from "../helpers/utils";

export default function SingleVehicle() {
  const [openSpecificationsDrawer, setOpenSpecificationsDrawer] =
    useState(false);

  const [openCostsDrawer, setOpenCostsDrawer] = useState(false);

  const params = useParams();
  const navigate = useNavigate();
  const vehicleSlug = params.slug;

  if (!vehicleSlug) {
    navigate("/vehicles");
    return null;
  }

  const vehicleData = vehicles.find(({ slug }) => slug === vehicleSlug);

  if (!vehicleData) {
    navigate("/vehicles");
    return null;
  }

  const accordionTheme = {
    content: {
      base: "bg-dark hidden",
    },
  };

  return (
    <section className="px-3 md:px-5 py-5 max-w-[1600px] mx-auto">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={IconMaterialSymbolsHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/vehicles">Vehicles</Breadcrumb.Item>
        <Breadcrumb.Item>{vehicleData?.name}</Breadcrumb.Item>
      </Breadcrumb>

      <div className="grid grid-cols-12 mt-5 gap-y-4">
        <div className="col-span-12 md:col-span-4"></div>
        <div className="col-span-12 md:col-span-8">
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
      <Drawer
        openDrawer={openSpecificationsDrawer}
        onClose={() => setOpenSpecificationsDrawer(false)}
      >
        <div className="px-2">
          <h6 className="text-xl font-bold pb-4 border-none">
            {vehicleData?.name}
          </h6>
          <Accordion className="border-none" theme={accordionTheme}>
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
                {vehicleData.fuel_consumption?.city_consumption && (
                  <p className="mt-2">
                  Urban: {vehicleData?.fuel_consumption?.urban_consumption} /{" "}
                  {vehicleData?.fuel_consumption?.fuel_unit}
                </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </section>
  );
}
