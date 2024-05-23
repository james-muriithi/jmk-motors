import FiltersCard from "../components/FiltersCard";
import Banner from "../components/home/Banner";
import TopBrands from "../components/home/TopBrands";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="medium-container px-5 py-5 md:py-9 max-w-3xl">
        <h5 className="mb-6 text-2xl font-bold">Search for your dream car</h5>
        <FiltersCard />
      </section>
      <TopBrands className="pt-5 pb-10" />
    </>
  );
}
