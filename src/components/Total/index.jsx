import { Divider } from "antd";
import { useContext } from "react";
import { useState, useEffect } from "react";
import CartContext from "../../utils/CartContext";
import content from "../../utils/content";
import { motion } from "framer-motion";
const Total = () => {
  const [total, setTotal] = useState(0);
  const { cartItems } = useContext(CartContext);
  useEffect(() => {
    setTotal(0);
    cartItems.length !== 0 &&
      cartItems.map((item) => {
        setTotal((prev) => prev + content[item-1].price);
      })
  }, [cartItems]);
  return (
    <>
      {total ? (
        <motion.div initial={{ opacity: 0, translateY: 200 }} animate={{ opacity: 1, translateY: 0 }} transition={{ delay: 0.5 }} className="md:w-4/12 w-11/12 mx-auto">
          <div className="border-muted border p-4 mx-4 rounded-xl">
            <div className="flex justify-between">
              <p className="text-grey mb-4">Subtotal</p>
              <p className="">${total}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted">Discount</p>
              <p>$0.00</p>
            </div>
            <Divider dashed />
            <div className="flex justify-between mb-4">
              <p className="">Gran Total</p>
              <p className="text-xl">${total}</p>
            </div>
            <button className="w-full p-4 rounded-xl hover:tracking-widest transition-all duration-200 bg-black text-center text-white">
              Checkout now
            </button>
          </div>
        </motion.div>
      ) : null}
    </>
  );
};
export default Total;
