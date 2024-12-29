import { Outlet, useLocation } from "react-router-dom";
import AudioSection from "../components/audio-section/AudioSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();
  //console.log(location);

  const isCheckoutPage = location.pathname.includes("checkout");
  //console.log({ isCheckoutPage });

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {!isCheckoutPage && <AudioSection />}
      <Footer />
    </>
  );
};

export default MainLayout;
