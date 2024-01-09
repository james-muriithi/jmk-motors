import FiltersCard from "../components/FiltersCard";

export default function Vehicles() {
  return (
    <section className="px-5 py-5 ">
      <h1>Vehicles</h1>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
          <FiltersCard />
        </div>
      </div>
    </section>
  );
}
