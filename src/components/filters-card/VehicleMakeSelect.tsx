import { useEffect } from "react";
import { Label, Select } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "reactfire";
import { setMake, SearchState } from "../../store/searchSlice";
import { MakeState, fetchVehicleMakes } from "../../store/vehicleMakeSlice";
import { AppDispatch } from "../../store";

export default function VehicleMakeSelect() {
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const { make } = useSelector(
    (state: { search: SearchState }) => state.search
  );

  const { makes: carMakes } = useSelector(
    (state: { vehicleMakes: MakeState }) => state.vehicleMakes
  );

  useEffect(() => {
    dispatch(fetchVehicleMakes({ firestore }));
  }, [dispatch]);

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="make" value="Make" />
      </div>
      <Select
        id="make"
        name="make"
        value={make}
        onChange={(e) => dispatch(setMake(e.target.value))}
      >
        <option value="">Select a make</option>
        {carMakes.map(({ id, label }) => (
          <option value={id} key={id}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
}
