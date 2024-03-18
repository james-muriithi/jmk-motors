import { Outlet } from "react-router-dom";

import Navbar from "./components/top-level/Navbar";
import Footer from "./components/top-level/Footer";
import ScrollToTop from "./helpers/scrollToTop";

export default function Root({ children }: { children?: React.ReactNode }) {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {children}
      <Footer />
    </>
  );
}
