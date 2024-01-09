import SelectData from "./types/SelectData";

interface CarMake extends SelectData {
  models: SelectData[];
}

export const carMakes: CarMake[] = [
  {
    id: "volksWagen",
    value: "volksWagen",
    label: "VolksWagen",
    models: [
      {
        id: "golf",
        value: "golf",
        label: "Golf Tsi",
      },
      {
        id: "passat",
        value: "passat",
        label: "Passat",
      },
      {
        id: "polo",
        value: "polo",
        label: "Polo",
      },
      {
        id: "tiguan",
        value: "tiguan",
        label: "Tiguan",
      },
      {
        id: "touareg",
        value: "touareg",
        label: "Touareg",
      },
      {
        id: "gti",
        value: "gti",
        label: "GTI",
      },
    ],
  },
  {
    id: "audi",
    value: "audi",
    label: "Audi",
    models: [
      {
        id: "a3",
        value: "a3",
        label: "A3",
      },
      {
        id: "a4",
        value: "a4",
        label: "A4",
      },
      {
        id: "a5",
        value: "a5",
        label: "A5",
      },
      {
        id: "a6",
        value: "a6",
        label: "A6",
      },
      {
        id: "a7",
        value: "a7",
        label: "A7",
      },
      {
        id: "a8",
        value: "a8",
        label: "A8",
      },
      {
        id: "q7",
        value: "q7",
        label: "Q7",
      },
    ],
  },
  {
    id: "bmw",
    value: "bmw",
    label: "BMW",
    models: [
      {
        id: "118i",
        value: "118i",
        label: "118i",
      },
      {
        id: "320i",
        value: "320i",
        label: "320i",
      },
      {
        id: "520i",
        value: "520i",
        label: "520i",
      },
      {
        id: "x1",
        value: "x1",
        label: "X1",
      },
      {
        id: "x3",
        value: "x3",
        label: "X3",
      },
      {
        id: "x5",
        value: "x5",
        label: "X5",
      },
      {
        id: "x6",
        value: "x6",
        label: "X6",
      },
    ],
  },
  {
    id: "mercedes",
    value: "mercedes",
    label: "Mercedes",
    models: [
      {
        id: "a180",
        value: "a180",
        label: "A180",
      },
      {
        id: "c180",
        value: "c180",
        label: "C180",
      },
      {
        id: "e200",
        value: "e200",
        label: "E200",
      },
      {
        id: "e250",
        value: "e250",
        label: "E250",
      },
      {
        id: "s500",
        value: "s500",
        label: "S500",
      },
      {
        id: "g500",
        value: "g500",
        label: "G500",
      },
    ],
  },
  {
    id: "volvo",
    value: "volvo",
    label: "Volvo",
    models: [
      {
        id: "s60",
        value: "s60",
        label: "S60",
      },
      {
        id: "s90",
        value: "s90",
        label: "S90",
      },
      {
        id: "xc60",
        value: "xc60",
        label: "XC60",
      },
      {
        id: "xc90",
        value: "xc90",
        label: "XC90",
      },
    ],
  },
];

export const carTransmissions: SelectData[] = [
  {
    id: "automatic",
    value: "automatic",
    label: "Automatic",
  },
  {
    id: "manual",
    value: "manual",
    label: "Manual",
  },
];
