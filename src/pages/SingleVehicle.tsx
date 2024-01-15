import { Breadcrumb } from "flowbite-react";
import { useState } from "react";
import Drawer from "../components/top-level/Drawer";

export default function SingleVehicle() {
  const [openSpecificationsDrawer, setOpenSpecificationsDrawer] =
    useState(false);

  return (
    <section className="px-3 md:px-5 py-5 max-w-[1600px] mx-auto">
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="/" icon={IconMaterialSymbolsHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="/vehicles">Vehicles</Breadcrumb.Item>
        <Breadcrumb.Item>Audi A3 Sedan 1.4T 'Typ 8V'</Breadcrumb.Item>
      </Breadcrumb>

      <div className="grid grid-cols-12 mt-5 gap-y-4">
        <div className="col-span-12 md:col-span-4"></div>
        <div className="col-span-12 md:col-span-8">
          <h3 className="font-bold text-3xl ">Audi A3 Sedan 1.4T 'Typ 8V'</h3>
          <p className="mt-3 text-gray-300 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem eum incidunt dolore. Aliquam nostrum perferendis
            explicabo possimus distinctio! Minima sit harum possimus ullam, eius
            odit voluptate quibusdam quis perspiciatis soluta.
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
            <div className="border border-gray-600 p-3 md:px-5 rounded text-gray-200 text-lg flex items-center cursor-pointer mt-4">
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
        sss
      </Drawer>
    </section>
  );
}
