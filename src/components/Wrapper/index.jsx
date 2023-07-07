import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import NavigationBar from "./NavigationBar";

const Wrapper = () => {
  return (
    <div className="">
      <Header />
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Wrapper;
