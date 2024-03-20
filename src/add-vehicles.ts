import { doc, setDoc } from "firebase/firestore";
import type { Firestore } from "firebase/firestore";
import { Vehicle } from "./types/Vehicle";

export const addVehicles = (firestore: Firestore) => {
  vehicles.map(async (vehicle) => {
    await setDoc(doc(firestore, "vehicles", vehicle.slug), {
      ...vehicle,
    });
  });
};

const vehicles: Vehicle[] = [
  {
    slug: "audi-a3-sedan-1-4t-typ-8v",
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
    make: "a3",
    model: "audi",
    description:
      "This is the cleanest Audi A3 we have for you running a 1.4L Turbocharged Fuel Stratified Injection doing 150hp and 250Nm of torque. It features a MacPherson strut suspension in the front and Multi-link rear suspension in the rear with models with less than 148hp having torsion bar suspension. On the interior, it has fabric seats, a 5.8-inch display, and a 6-speaker stereo system. It also has a 7-speed S-Tronic dual-clutch transmission.",
    fuel_consumption: {
      fuel_unit: "Litre",
      urban_consumption: 14,
      fuel_tank_capacity: null,
      highway_consumption: 16,
    },
    annual_insurance: 72000,
    vehicle_images: [
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0177.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0178.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0176.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0173.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0172.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0180.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0171.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0175.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0179.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0174.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0169.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0168.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0170.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20240109-WA0181.jpg",
    ],
    engine_specifications: {
      torque: 250,
      cylinders: 4,
      fuel_type: "Petrol",
      engine_size: 1400,
      horse_power: 150,
      acceleration: 8,
      transmission: "Automatic",
    },
  },
  {
    slug: "audi-a3",
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20230929-WA0224.jpg",
    name: "Audi A3",
    year_of_manufacture: 2015,
    mileage: 95000,
    price: 1850000,
    currency: "KES",
    make: "a3",
    model: "audi",
    is_favorite: false,
    is_available: true,
    is_locally_used: true,
    description:
      "Leather seats, dual zone climate controls, fog lights, parking sensors, Multifunctional steering wheel.",
    fuel_consumption: {
      fuel_unit: "Litre",
      urban_consumption: 14,
      fuel_tank_capacity: null,
      highway_consumption: 16,
    },
    annual_insurance: 83250,
    vehicle_images: [
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0224.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0221.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0222.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0234.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0231.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0232.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0225.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0228.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0223.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0230.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0229.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0226.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0229_Zx19OoS.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0227.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20230929-WA0233.jpg",
    ],
    engine_specifications: {
      torque: 200,
      cylinders: 4,
      fuel_type: "Petrol",
      engine_size: 1400,
      horse_power: 131,
      acceleration: 8,
      transmission: "Automatic",
    },
  },
  {
    slug: "audi-a3-1-4t",
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/IMG-20231031-WA0155.jpg",
    name: "Audi A3 1.4T",
    year_of_manufacture: 2016,
    mileage: 70487,
    price: 2300000,
    make: "a3",
    model: "audi",
    currency: "KES",
    is_favorite: false,
    is_available: true,
    is_locally_used: true,
    description:
      "This A3 has a 1400cc engine variant that is quite strong compared to the 1200cc variant. It has no lag and accelerates better. The interior of this Audi A3 is fitted with fabric seats, and Audi MMI infotainment system, dual zone climate controls, and a multifunctional steering wheel.",
    fuel_consumption: {
      fuel_unit: "Litre",
      urban_consumption: 14,
      fuel_tank_capacity: null,
      highway_consumption: 16,
    },
    annual_insurance: 117000,
    vehicle_images: [
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0155.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231029-WA0215.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0152.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0149.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0153.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0150.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0144.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0142.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0145.jpg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/IMG-20231031-WA0143.jpg",
    ],
    engine_specifications: {
      torque: 250,
      cylinders: 4,
      fuel_type: "Petrol",
      engine_size: 1400,
      horse_power: 150,
      acceleration: 8,
      transmission: "Automatic",
    },
  },
];
