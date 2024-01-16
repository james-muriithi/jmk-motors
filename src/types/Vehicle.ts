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
}
