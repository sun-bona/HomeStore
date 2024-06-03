import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import Scroll from "../Scroll";

const RootLayout = () => {
  return (
    <div>
      <Scroll />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
