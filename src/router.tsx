import { createBrowserRouter, isRouteErrorResponse, useRouteError } from "react-router-dom";
import Root from './Root';
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import SingleVehicle from './pages/SingleVehicle';
import NotFound from "./pages/NotFound";

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Root><RootBoundary /></Root>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vehicles",
        element: <Vehicles />,
      },
      {
        path: "vehicles/:slug",
        element: <SingleVehicle />,
      }
    ],
  },
]);

function RootBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }
  }

  return <div>Something went wrong</div>;
}