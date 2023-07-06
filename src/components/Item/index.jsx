import Lottie from "lottie-react";
import { Love } from "../../assets/animations";
import { useRef } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../utils/CartContext";
import { handleAddToCart } from "../../utils/handleCart";
// eslint-disable-next-line react/prop-types
const Item = ({ name, image, price, description, index }) => {
  const {cartItems,setCartItems} = useContext(CartContext);
  const lottieRef = useRef();
  useEffect(() => {
    lottieRef.current.pause();
  });
  const animationClick = () => {
    lottieRef.current.goToAndPlay(0, true);
  };
  return (
    <motion.a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="w-full sm:w-6/12 lg:w-4/12 xl:w-3/12 p-1 z-10 mb-3 relative group"
      initial={{ opacity: 0, translateX: -100 }}
      animate={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 0.5, type: "spring", delay: 0.5 * index }}
    >
      <Lottie
        lottieRef={lottieRef}
        onClick={animationClick}
        animationData={Love}
        className="absolute top-2 right-2 w-12 hover:cursor-pointer"
        autoPlay={false}
        loop={false}
      />
      <Link to={`product/${index}`}>
        <div className="w-full h-80 transition-all duration-200 bg-[#f6f6f4] rounded p-10 flex justify-center group-hover:bg-[#d2d2ce]">
          <img
            src={image}
            className="brightness-90 group-hover:brightness-110 transition-all duration-200"
          />
        </div>
        <div className="mt-1 flex justify-between">
          <p className="">{name}</p>
          <p className="before:content-['$'] before:text-xs before:text-main relative before:absolute before:top-[2px] before:font-sans before:font-medium before:left-0 pl-2">
            {price}
          </p>
        </div>
        <p className="text-sm">{description}</p>
      </Link>
      <button className="py-2 px-3 group/button border-main rounded-full border hover:bg-main mt-2 transition-all duration-200" onClick={() => handleAddToCart(index, cartItems, setCartItems)}>
        <p className="text-sm text-main group-hover/button:text-white">
          Add to cart
        </p>
      </button>
    </motion.a>
  );
};

export default Item;
//93 frames
