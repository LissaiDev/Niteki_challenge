import { Routes,Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />} >
        <Route path="" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default Navigation;
