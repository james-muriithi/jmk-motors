import { useEffect } from "react";
import { Label, Select } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useFirestore } from "reactfire";
import { setModel, SearchState } from "../../store/searchSlice";
import { ModelState, fetchVehicleModels } from "../../store/vehicleModelSlice";
import { AppDispatch } from "../../store";

export default function VehicleModelSelect() {
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const { make, model } = useSelector(
    (state: { search: SearchState }) => state.search
  );

  const { models = [] } = useSelector(
    (state: { vehicleModels: ModelState }) => state.vehicleModels
  );

  useEffect(() => {
    dispatch(fetchVehicleModels({ firestore, makeId: make }));
  }, [make]);

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="model" value="Model" />
      </div>
      <Select
        id="model"
        name="model"
        value={model}
        onChange={(e) => dispatch(setModel(e.target.value))}
      >
        <option disabled value="">
          Select a model
        </option>
        {models.map(({ id, label }) => (
          <option value={id} key={id}>
            {label}
          </option>
        ))}
      </Select>
    </div>
  );
}
