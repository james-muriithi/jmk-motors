import DealsOfTheDay from "./DealsOfTheDay";

export default function Banner() {
  return (
    <>
      <section className="md:px-5 pt-10 pb-10">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center medium-container">
            <h1 className="text-4xl font-bold text-center text-gray-100">
              Welcome to <b className="text-violet-400">JMK Motors</b>
            </h1>
          </div>
        </div>
        <DealsOfTheDay className="mt-2" />
      </section>
    </>
  );
}
