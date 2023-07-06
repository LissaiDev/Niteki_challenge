import CartItem from "../../components/CartItem";
import { useContext } from "react";
import CartContext from "../../utils/CartContext";
import content from "../../utils/content";
import Total from "../../components/Total";
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  return (
    <div className="flex flex-wrap container mx-auto md:p-3 ">
      <div className="md:w-8/12 w-11/12">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl">Cart</h1>
          <button type="button" className=" flex" onClick={() => setCartItems([])}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="red"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
            </svg>
            <p className="text-[]">Remove all</p>
          </button>
        </div>
        <div className="flex pl-5 justify-between text-[#b4b4b4] text-sm">
          <p>PRODUCT</p>
          <p>PRICE</p>
        </div>

        {cartItems.map((item, index) => (
          <CartItem index={index} key={item} number={item} {...content[item-1]} cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>
      <Total />
    </div>
  );
};

export default Cart;
