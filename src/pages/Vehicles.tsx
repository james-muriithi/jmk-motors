import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import FiltersCard from "../components/FiltersCard";
import VehicleCard from "../components/vehicle/VehicleCard";
import { fetchVehicles, VehicleState } from "../store/vehicleSlice";
import { useFirestore } from "reactfire";
import { AppDispatch } from "../store";
import {
  setMake,
  setModel,
  setMaxYom,
  setMinYom,
  setMinMileage,
  setMinPrice,
  setMaxMileage,
  setMaxPrice,
  setTransmission,
} from "../store/searchSlice";

export default function Vehicles() {
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const [searchParams] = useSearchParams();
  const { vehicles, loading } = useSelector(
    (state: { vehicles: VehicleState }) => state.vehicles
  );

  useEffect(() => {
    const searchMake = searchParams.get("make");
    const searchModel = searchParams.get("model");
    const searchMinYom = searchParams.get("min_yom");
    const searchMaxYom = searchParams.get("max_yom");
    const searchMinPrice = searchParams.get("min_price");
    const searchMaxPrice = searchParams.get("max_price");
    const searchMinMileage = searchParams.get("min_mileage");
    const searchMaxMileage = searchParams.get("max_mileage");
    const searchTransmission = searchParams.get("transmission");

    if (searchMake) {
      dispatch(setMake(searchMake));
    }
    if (searchModel) {
      dispatch(setModel(searchModel));
    }
    if (searchMinYom) {
      dispatch(setMinYom(searchMinYom));
    }
    if (searchMaxYom) {
      dispatch(setMaxYom(searchMaxYom));
    }
    if (searchMinPrice) {
      dispatch(setMinPrice(searchMinPrice));
    }
    if (searchMaxPrice) {
      dispatch(setMaxPrice(searchMaxPrice));
    }
    if (searchMinMileage) {
      dispatch(setMinMileage(searchMinMileage));
    }
    if (searchMaxMileage) {
      dispatch(setMaxMileage(searchMaxMileage));
    }
    if (searchTransmission) {
      dispatch(setTransmission(searchTransmission));
    }
    dispatch(
      fetchVehicles({
        firestore,
        make: searchMake || "",
        model: searchModel || "",
      })
    );
  }, [searchParams]);

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
          <FiltersCard className="hidden sm:block" />
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
