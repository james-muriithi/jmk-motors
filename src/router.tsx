import { createBrowserRouter } from "react-router-dom";
import Root from './Root';
import Home from "./pages/Home";
import About from "./pages/About";
import Vehicles from "./pages/Vehicles";
import SingleVehicle from './pages/SingleVehicle';

export default createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
