import type { Timestamp } from "firebase/firestore"
export interface Vehicle {
  id: number;
  slug: string;
  name: string;
  year_of_manufacture: number;
  mileage: number;
  price: number;
  currency: string;
  is_favorite: boolean;
  is_available: boolean;
  is_locally_used: boolean;
  description: string;
  thumbnail: string;
  vehicle_images?: string[];
  annual_insurance: number;
  fuel_consumption?: {
    fuel_unit: string;
    urban_consumption: number;
    fuel_tank_capacity?: number | null;
    highway_consumption: number;
  };
  engine_specifications?: {
    torque: number;
    cylinders?: number;
    fuel_type: string;
    engine_size: number;
    horse_power: number;
    acceleration: number;
    transmission: string;
  };
}

export interface CarMake {
  id: string | number;
  label: string;
  createdAt?: Timestamp;
}
