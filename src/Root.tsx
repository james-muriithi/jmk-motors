import { Outlet } from "react-router-dom";

import Navbar from "./components/top-level/Navbar";
import Footer from "./components/top-level/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
