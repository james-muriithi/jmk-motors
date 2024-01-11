import { Card, Label, Select, TextInput, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useLocation } from 'react-router-dom';

import {
  setMake,
  SearchState,
  setModel,
  setMaxYom,
  setMinYom,
  setMinMileage,
  setMinPrice,
  setMaxMileage,
  setMaxPrice,
  setTransmission,
} from "../store/searchSlice";
import { carMakes, carTransmissions } from "../data";
import SelectData from "../types/SelectData";
import { useEffect } from "react";

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

  let models: SelectData[] = [];

  if (make) {
    const makeData = carMakes.find((item) => item.value === make);
    if (makeData) {
      models = makeData.models;
    }
  }

  const location = useLocation();
  const [searchParams] = useSearchParams();

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

    if (searchMake && make !== searchMake) {
      dispatch(setMake(searchMake));
    }
    if (searchModel && model !== searchModel) {
      dispatch(setModel(searchModel));
    }
    if (searchMinYom && minYom !== Number(searchMinYom)) {
      dispatch(setMinYom(searchMinYom));
    }
    if (searchMaxYom && maxYom !== Number(searchMaxYom)) {
      dispatch(setMaxYom(searchMaxYom));
    }
    if (searchMinPrice && minPrice !== Number(searchMinPrice)) {
      dispatch(setMinPrice(searchMinPrice));
    }
    if (searchMaxPrice && maxPrice !== Number(searchMaxPrice)) {
      dispatch(setMaxPrice(searchMaxPrice));
    }
    if (searchMinMileage && minMileage !== Number(searchMinMileage)) {
      dispatch(setMinMileage(searchMinMileage));
    }
    if (searchMaxMileage && maxMileage !== Number(searchMaxMileage)) {
      dispatch(setMaxMileage(searchMaxMileage));
    }
    if (searchTransmission && transmission !== searchTransmission) {
      dispatch(setTransmission(searchTransmission));
    }
  }, [location]);

  return (
    <Card className={`bg-variant border-0 ${className}`}>
      <form action="/vehicles">
        <div className="grid sm:grid-cols-2 gap-5">
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
              {carMakes.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
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
              {models.map(({ value, label }) => (
                <option value={value} key={value}>
                  {label}
                </option>
              ))}
            </Select>
          </div>
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
        <div className="mt-6"></div>
        <div className="mb-2 block">
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
        <div className="mt-6">
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
