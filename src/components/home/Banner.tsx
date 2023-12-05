import BannerImage from "../../assets/gti.png";
import "./Banner.scss";

export default function Banner() {
  return (
    <>
      <section className="px-5 py-16 medium-container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-gray-100">
              Welcome to <b className="text-violet-400">JMK Motors</b>
            </h1>
            <h2 className="text-xl font-semibold text-center text-gray-300 mt-4">
              The best place to get your dream car.
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mt-16 car-movement">
            <img
              className="object-contain w-[550px] car"
              src={BannerImage}
              alt="GTI"
            />
          </div>
        </div>
      </section>
    </>
  );
}
