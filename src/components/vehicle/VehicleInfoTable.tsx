import { Table } from "flowbite-react";
import { numberFormat } from "../../helpers/utils";
import { Vehicle } from "../../types/Vehicle";

export default function VehicleInfoTable({
  vehicleData,
}: {
  vehicleData: Vehicle;
}) {
  const vehicleInfo: Array<{
    title: string;
    value: string | number | undefined;
  }> = [
    {
      title: "Year of manufacture",
      value: vehicleData?.year_of_manufacture,
    },
    {
      title: "Mileage",
      value: `${numberFormat(vehicleData?.mileage)} km`,
    },
    {
      title: "Fuel type",
      value: vehicleData?.engine_specifications?.fuel_type,
    },
    {
      title: "Drive type",
      value: vehicleData?.engine_specifications?.transmission,
    },
    {
      title: "Engine capacity",
      value: `${vehicleData?.engine_specifications?.engine_size} cc`,
    },
    {
      title: "Engine power",
      value: `${vehicleData?.engine_specifications?.horse_power} hp`,
    },
    {
      title: "Torque",
      value: `${vehicleData?.engine_specifications?.torque} Nm`,
    },
    {
      title: "Acceleration 0-100 km/h",
      value: `${vehicleData?.engine_specifications?.acceleration} sec`,
    },
  ];

  return (
    <Table>
      <Table.Body>
        {vehicleInfo.map(({ title, value }) => (
          <Table.Row
            className="bg-dark border-b border-gray-700 text-gray-300"
            key={title}
          >
            <Table.Cell className="font-semibold">{title}</Table.Cell>
            <Table.Cell>{value}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
