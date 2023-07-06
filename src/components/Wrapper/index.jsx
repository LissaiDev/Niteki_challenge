import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

const Wrapper = () => {
  return (
    <div className="relative">
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
