import { Outlet } from "react-router-dom";

import Navbar from "./components/top-level/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
