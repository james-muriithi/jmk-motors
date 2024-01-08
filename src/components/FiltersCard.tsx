import { Card, Label, Select, TextInput, Button } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
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

export default function FiltersCard() {
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

  return (
    <Card className="bg-variant border-0">
      <form action="">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="make" value="Make" />
            </div>
            <Select
              id="make"
              value={make}
              onChange={(e) => dispatch(setMake(e.target.value))}
            >
              <option disabled value="">
                Select a make
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="model" value="Model" />
            </div>
            <Select
              id="model"
              value={model}
              onChange={(e) => dispatch(setModel(e.target.value))}
            >
              <option disabled value="">
                Select a model
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </Select>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2 block">
            <Label value="Year of manufacture" />
          </div>
          <div className="flex flex-wrap  gap-5">
            <div className="w-full sm:w-auto">
              <TextInput
                id="min_yom"
                type="number"
                placeholder="Min YOM"
                className="sm:w-56"
                min={1970}
                max={new Date().getFullYear()}
                value={minYom}
                onChange={(e) => dispatch(setMinYom(e.target.value))}
              />
            </div>
            <div className="w-full sm:w-auto">
              <TextInput
                id="max_yom"
                type="number"
                placeholder="Max YOM"
                className="sm:w-56"
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
        <div className="flex flex-wrap  gap-5">
          <div className="w-full sm:w-auto">
            <TextInput
              id="min_price"
              type="number"
              placeholder="Min Price"
              className="sm:w-56"
              min={0}
              value={minPrice}
              onChange={(e) => dispatch(setMinPrice(e.target.value))}
            />
          </div>
          <div className="w-full sm:w-auto">
            <TextInput
              id="max_price"
              type="number"
              placeholder="Max Price"
              className="sm:w-56"
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
          <div className="flex flex-wrap gap-5">
            <div className="w-full sm:w-auto">
              <TextInput
                id="min_mileage"
                type="number"
                placeholder="Min Mileage"
                className="sm:w-56"
                min={0}
                value={minMileage}
                onChange={(e) => dispatch(setMinMileage(e.target.value))}
              />
            </div>
            <div className="w-full sm:w-auto">
              <TextInput
                id="max_mileage"
                type="number"
                placeholder="Max Mileage"
                className="sm:w-56"
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
            value={transmission}
            onChange={(e) => dispatch(setTransmission(e.target.value))}
          >
            <option value="automatic">Automatic</option>
            <option value="manual">Manual</option>
          </Select>
        </div>
        <div className="mt-9">
          <Button className="btn btn-primary w-full" color="gray">
            Search
          </Button>
        </div>
      </form>
    </Card>
  );
}
