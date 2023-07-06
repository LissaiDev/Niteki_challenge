import { Routes,Route } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Home from "../pages/Home";
import Details from "../pages/Details";
import Cart from "../pages/Cart";
import { useState } from "react";
import CartContext from "../utils/CartContext";
import Error from "../components/Error";
const Navigation = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartContext.Provider value={{cartItems, setCartItems}}>
      <Routes>
      <Route path="/" element={<Wrapper />} >
        <Route path="" element={<Home />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
    </CartContext.Provider>
  );
};

export default Navigation;
