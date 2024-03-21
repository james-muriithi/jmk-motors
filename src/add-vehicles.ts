import { doc, setDoc, Timestamp } from "firebase/firestore";
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
    slug: "ford-ranger-raptor-y8qgrxs",
    thumbnail:
      "https://dashboard.kaiandkaro.com/media/vehicles/thumbnails/3071ac30-b285-4cf0-96f4-7084b611348f.jpeg",
    name: "Ford Ranger Raptor",
    year_of_manufacture: 2018,
    mileage: 41153,
    price: 7900000,
    currency: "KES",
    is_favorite: false,
    is_available: true,
    is_locally_used: false,
    make: "ford",
    model: "ranger",
    description:
      "Raptor body kit,offroad tyres,leather interior,dual zone climate control,locking differentials,hill descent controls,side steps.",
    fuel_consumption: {
      fuel_unit: "Litre",
      urban_consumption: 10,
      fuel_tank_capacity: null,
      highway_consumption: 13,
    },
    annual_insurance: 355500,
    vehicle_images: [
      "https://dashboard.kaiandkaro.com/media/vehicles/images/3071ac30-b285-4cf0-96f4-7084b611348f.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/eab8c13e-9bc5-462b-a53c-1a5543116e59.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/9debdeca-3e78-41a8-8114-369f32f99f93.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/f4ae9b46-af8e-47f8-9a73-56fe962d1141.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/d8032018-3f87-4027-a064-4261a4eb1e02.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/69f48d26-9f9b-48f8-9bec-8430ba2573f6.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/fc3b6b39-e447-41ee-836e-f8b1222840c8.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/dbd99ffc-1e7a-4e87-99dd-9950525478e4.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/5860addf-d859-4e83-87da-d3b3dbba9649.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/76d6c788-7bf7-4939-b891-5a31eba18568.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/16fdd69c-867c-4347-8efa-9c14fed710f7.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/19d1c56e-40c4-4083-85aa-e62248b397ba.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/43960098-828c-4c0f-b3c1-f0c7885a1015.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/5860addf-d859-4e83-87da-d3b3dbba9649_nJZGWLf.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/be4a0f8d-3f0e-4c75-aa21-bf1552c963a5.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/d0bc118e-71de-498d-a45b-d10fa31c6458.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/93340117-4011-4a65-98b5-5ac263bd0f6a.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/498a05c5-6119-4051-9a01-5201de9932c8.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/167d34da-c8df-4aa4-871b-7bc8fa5764f4.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/f6dc2c33-0ed0-4bec-83ab-f4d38ec61e03.jpeg",
      "https://dashboard.kaiandkaro.com/media/vehicles/images/866dab4b-9125-4cc9-90b1-a05324a3e3df.jpeg",
    ],
    engine_specifications: {
      torque: 500,
      cylinders: 4,
      fuel_type: "Petrol",
      engine_size: 2000,
      horse_power: 210,
      acceleration: 10,
      transmission: "Automatic",
    },
    created_at: Timestamp.now(),
  },
];
