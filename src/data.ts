import SelectData from "./types/SelectData";
import { Vehicle } from "./types/Vehicle";

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

export const vehicles: Vehicle[] = [
  {
    id: 1,
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20240109-WA0177.jpg",
    name: "Audi A3 Sedan 1.4T 'Typ 8V'",
    year_of_manufacture: 2015,
    mileage: 72000,
    price: 1800000,
    currency: "KES",
    is_favorite: false,
    is_available: true,
    is_locally_used: true,
    description:
      "This is the cleanest Audi A3 we have for you running a 1.4L Turbocharged Fuel Stratified Injection doing 150hp and 250Nm of torque. It features a MacPherson strut suspension in the front and Multi-link rear suspension in the rear with models with less than 148hp having torsion bar suspension. On the interior, it has fabric seats, a 5.8-inch display, and a 6-speaker stereo system. It also has a 7-speed S-Tronic dual-clutch transmission.",
  },
  {
    id: 2,
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20230929-WA0224.jpg",
    name: "Audi A3",
    year_of_manufacture: 2015,
    mileage: 95000,
    price: 1850000,
    currency: "KES",
    is_favorite: false,
    is_available: true,
    is_locally_used: true,
    description:
      "Leather seats, dual zone climate controls, fog lights, parking sensors, Multifunctional steering wheel.",
  },
  {
    id: 3,
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20231031-WA0155.jpg",
    name: "Audi A3 1.4T",
    year_of_manufacture: 2016,
    mileage: 70487,
    price: 2300000,
    currency: "KES",
    is_favorite: false,
    is_available: true,
    is_locally_used: true,
    description:
      "This A3 has a 1400cc engine variant that is quite strong compared to the 1200cc variant. It has no lag and accelerates better. The interior of this Audi A3 is fitted with fabric seats, and Audi MMI infotainment system, dual zone climate controls, and a multifunctional steering wheel.",
  },
];