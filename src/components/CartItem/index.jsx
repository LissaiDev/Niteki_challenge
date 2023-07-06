import { Divider } from "antd";
import ItemShortImage from "../ItemShortImage";
import { handleRemoveFromCart } from "../../utils/handleCart";
import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const CartItem = ({index, number, name, image, price,description,cartItems,setCartItems}) => {
  return (
    <motion.div initial={{ opacity: 0, translateX: -100 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 0.5, type: "spring", delay: 0.5 * index }} exit={{ opacity: 0, translateX: -100 }} className="">
      <Divider className="mt-3" />
      <div className="pl-5 flex justify-between">
        <div className="space-x-3 flex">
          <ItemShortImage itemNumber={number} image={image} />
          <div>
            <p>{name}</p>
            <p className="text-[#b4b4b4]">{description}</p>
          </div>
        </div>
        <div className="flex flex-col">
        <p className="tracking-widest mb-1">${price}</p>
        <button type="button" className=" flex" onClick={()=>handleRemoveFromCart(number,cartItems,setCartItems)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="red"
            viewBox="0 0 256 256"
          >
            <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path>
          </svg>
          <p className="">Remove</p>
        </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CartItem;
