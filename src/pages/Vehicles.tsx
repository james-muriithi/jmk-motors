import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/VehicleCard";
import { vehicles } from "../data";

export default function Vehicles() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section className="px-5 py-5 max-w-[1600px] mx-auto">
      <div className="grid grid-cols-12 mt-10 gap-5 justify-between">
        <div className="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3">
          <Button
            size="sm"
            color="gray"
            className="block sm:hidden"
            onClick={() => setOpenModal(true)}
          >
            <IconPhFunnelFill className="text-xl" />
          </Button>
          <FiltersCard className="hidden sm:block h-full" />
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
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
        theme={{
          content: {
            inner:
              "relative rounded-lg bg-white shadow dark:bg-variant flex flex-col max-h-[95vh]",
          },
        }}
      >
        <Modal.Header />
        <Modal.Body>
          <div>
            <FiltersCard className="w-full h-full shadow-none" />
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
