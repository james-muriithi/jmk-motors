import { Outlet } from "react-router-dom";
import { getFirestore } from "firebase/firestore";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import { getAnalytics } from "firebase/analytics";

import Navbar from "./components/top-level/Navbar";
import Footer from "./components/top-level/Footer";
import ScrollToTop from "./helpers/scrollToTop";

export default function Root({ children }: { children?: React.ReactNode }) {
  const app = useFirebaseApp();
  const firestoreInstance = getFirestore(app);
  // Initialize Analytics
  getAnalytics(app);
  return (
    <FirestoreProvider sdk={firestoreInstance}>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      {children}
      <Footer />
    </FirestoreProvider>
  );
}
