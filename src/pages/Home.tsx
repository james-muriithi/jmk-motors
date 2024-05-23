import FiltersCard from "../components/FiltersCard";
import Banner from "../components/home/Banner";
import DealsOfTheDay from "../components/home/DealsOfTheDay";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="medium-container px-5 py-5 md:py-9 max-w-3xl">
        <h5 className="mb-6 text-2xl font-bold">Search for your dream car</h5>
        <FiltersCard />
      </section>
      <DealsOfTheDay className="mt-2" />
    </>
  );
}
