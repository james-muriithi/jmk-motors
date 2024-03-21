import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "flowbite-react";
import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/vehicle/VehicleCard";
import { fetchVehicles, VehicleState } from "../store/vehicleSlice";
import { useFirestore } from "reactfire";
import { AppDispatch } from "../store"; 
import { SearchState } from "../store/searchSlice";
import { useLocation } from "react-router-dom";

export default function Vehicles() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const location = useLocation();
  const { vehicles, loading } = useSelector(
    (state: { vehicles: VehicleState }) => state.vehicles
  );
  const { make, model } = useSelector(
    (state: { search: SearchState }) => state.search
  );

  useEffect(() => {
    dispatch(fetchVehicles({ firestore, make, model }));
  }, [location]);

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
        {loading && "Loading..."}
        {!loading &&
          vehicles.map((vehicle) => (
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
