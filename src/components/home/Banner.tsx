import { Link } from "react-router-dom";
import { MakeState, fetchVehicleMakes } from "../../store/vehicleMakeSlice";
import "./Banner.scss";
import { AppDispatch } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "reactfire";
import { useEffect } from "react";

export default function Banner() {
  const dispatch = useDispatch<AppDispatch>();
  const firestore = useFirestore();

  const { makes: carMakes = [], loading } = useSelector(
    (state: { vehicleMakes: MakeState }) => state.vehicleMakes
  );

  const topBrands = carMakes.filter(({ isPromoted }) => isPromoted).slice(0, 4);

  useEffect(() => {
    if (!loading) {
      dispatch(fetchVehicleMakes({ firestore }));
    }
  }, []);

  const canShowTopBrands = loading || (!loading && topBrands.length > 0);
  return (
    <>
      <section className="px-5 pt-16 pb-10 medium-container">
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center text-gray-100">
              Welcome to <b className="text-violet-400">JMK Motors</b>
            </h1>
            {canShowTopBrands && (
              <h2 className="text-xl font-semibold text-center text-gray-300 mt-4">
                Here are the most famous car brands
              </h2>
            )}
          </div>
          {/* <div className="flex justify-center w-full">
            
          </div> */}
          {canShowTopBrands && (
            <div className="flex flex-wrap items-center justify-center mt-10 gap-5 lg:gap-8">
              {loading &&
                [...Array(4)].map((_, index) => (
                  <div
                    role="status"
                    key={index}
                    className="max-w-sm p-6 rounded-lg  animate-pulse logo-card"
                  >
                    <div className="flex items-center justify-center h-32 mb-4 w-full">
                      <svg
                        className="w-28 h-28 text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M21.6809 16.9601L18.5509 9.65013C17.4909 7.17013 15.5409 7.07013 14.2309 9.43013L12.3409 12.8401C11.3809 14.5701 9.5909 14.7201 8.3509 13.1701L8.1309 12.8901C6.8409 11.2701 5.0209 11.4701 4.0909 13.3201L2.3709 16.7701C1.1609 19.1701 2.9109 22.0001 5.5909 22.0001H18.3509C20.9509 22.0001 22.7009 19.3501 21.6809 16.9601Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          opacity="0.4"
                          d="M6.9707 8C8.62756 8 9.9707 6.65685 9.9707 5C9.9707 3.34315 8.62756 2 6.9707 2C5.31385 2 3.9707 3.34315 3.9707 5C3.9707 6.65685 5.31385 8 6.9707 8Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="h-4 rounded w-28 bg-gray-600 mx-auto"></div>

                    <span className="sr-only">Loading...</span>
                  </div>
                ))}
              {!loading &&
                topBrands.map(({ logo, label, id }) => (
                  <Link
                    to={`/vehicles?make=${id}`}
                    key={label}
                    className="block max-w-sm p-4 lg:p-5 rounded-lg bg-gray-800 hover:bg-gray-700 shadow-lg text-gray-200 logo-card"
                  >
                    <img src={logo} alt="" className="w-28" />
                    <p className="text-center mt-3 font-bold text-lg">
                      {label}
                    </p>
                  </Link>
                ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
