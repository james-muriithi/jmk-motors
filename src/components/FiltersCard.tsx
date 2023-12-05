import { Card, Label, Select, TextInput, Button } from "flowbite-react";

export default function FiltersCard() {
  return (
    <Card className="bg-variant border-0">
      <form action="">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="make" value="Make" />
            </div>
            <Select id="make">
              <option disabled selected>
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
            <Select id="model">
              <option disabled selected>
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
              />
            </div>
            <div className="w-full sm:w-auto">
              <TextInput
                id="min_yom"
                type="number"
                placeholder="Min YOM"
                className="sm:w-56"
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
            />
          </div>
          <div className="w-full sm:w-auto">
            <TextInput
              id="max_price"
              type="number"
              placeholder="Max Price"
              className="sm:w-56"
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
              />
            </div>
            <div className="w-full sm:w-auto">
              <TextInput
                id="max_mileage"
                type="number"
                placeholder="Max Mileage"
                className="sm:w-56"
              />
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2 block">
            <Label htmlFor="transmission" value="Transmission" />
          </div>
          <Select id="transmission">
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
