import { Card, Label, Select, TextInput, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, createSearchParams } from "react-router-dom";

import {
  SearchState,
  setMaxYom,
  setMinYom,
  setMinMileage,
  setMinPrice,
  setMaxMileage,
  setMaxPrice,
  setTransmission,
} from "../store/searchSlice";
import { carTransmissions } from "../data";
import { FormEvent } from "react";
import VehicleMakeSelect from "./filters-card/VehicleMakeSelect";
import VehicleModelSelect from "./filters-card/VehicleModelSelect";

export default function FiltersCard({ className = "" }) {
  const {
    make,
    model,
    minYom,
    maxYom,
    minPrice,
    minMileage,
    maxPrice,
    maxMileage,
    transmission,
  } = useSelector((state: { search: SearchState }) => state.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const query: Partial<SearchState> = {
      make: make || "",
      model: model || "",
    };
    if (minYom) query.minYom = minYom;
    if (maxYom) query.maxYom = maxYom;
    if (minPrice) query.minPrice = minPrice;
    if (maxPrice) query.maxPrice = maxPrice;
    if (minMileage) query.minMileage = minMileage;
    if (maxMileage) query.maxMileage = maxMileage;
    if (transmission) query.transmission = transmission;

    navigate({
      pathname: "/vehicles",
      search: createSearchParams(query as {}).toString(),
    });
  };

  return (
    <Card className={`bg-variant border-0 ${className}`}>
      <form action="/vehicles" onSubmit={(e) => onSubmit(e)}>
        <div className="grid sm:grid-cols-2 gap-5">
          <VehicleMakeSelect />
          <VehicleModelSelect />
        </div>
        <div className="mt-6">
          <div className="mb-2 block">
            <Label value="Year of manufacture" />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="min_yom"
                name="min_yom"
                type="number"
                placeholder="Min YOM"
                className="w-full"
                min={1970}
                max={new Date().getFullYear()}
                value={minYom}
                onChange={(e) => dispatch(setMinYom(e.target.value))}
              />
            </div>
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="max_yom"
                name="max_yom"
                type="number"
                placeholder="Max YOM"
                className="w-full"
                min={1970}
                max={new Date().getFullYear()}
                value={maxYom}
                onChange={(e) => dispatch(setMaxYom(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="price hidden">
          <div className="mt-6 mb-2 block">
            <Label value="Price" />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="min_price"
                name="min_price"
                type="number"
                placeholder="Min Price"
                className="w-full"
                min={0}
                value={minPrice}
                onChange={(e) => dispatch(setMinPrice(e.target.value))}
              />
            </div>
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="max_price"
                name="max_price"
                type="number"
                placeholder="Max Price"
                className="w-full"
                min={0}
                value={maxPrice}
                onChange={(e) => dispatch(setMaxPrice(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 hidden mileage">
          <div className="mb-2 block">
            <Label value="Mileage" />
          </div>
          <div className="flex flex-wrap sm:flex-nowrap gap-5">
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="min_mileage"
                name="min_mileage"
                type="number"
                placeholder="Min Mileage"
                className="w-full"
                min={0}
                value={minMileage}
                onChange={(e) => dispatch(setMinMileage(e.target.value))}
              />
            </div>
            <div className="w-full sm:max-w-[224px]">
              <TextInput
                id="max_mileage"
                name="max_mileage"
                type="number"
                placeholder="Max Mileage"
                className="w-full"
                value={maxMileage}
                onChange={(e) => dispatch(setMaxMileage(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2 block">
            <Label htmlFor="transmission" value="Transmission" />
          </div>
          <Select
            id="transmission"
            name="transmission"
            value={transmission}
            onChange={(e) => dispatch(setTransmission(e.target.value))}
          >
            {carTransmissions.map(({ value, label }) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </Select>
        </div>
        <div className="mt-9">
          <Button className="btn w-full" color="light" type="submit">
            Search
          </Button>
        </div>
      </form>
    </Card>
  );
}
