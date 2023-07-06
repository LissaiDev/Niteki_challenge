import { ColorPicker, Rate } from "antd";
import { Divider } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import Recommendations from "../../components/Recomendations";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import content from "../../utils/content";
import Error from "../../components/Error";
const Details = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    id > 0 && id <= content.length && setData(content[id - 1]);
    setData(content[id - 1]);
  }, [id]);
  return (
    <>
      {data ? (
        <section className="container mx-auto flex my-10 flex-wrap">
          <motion.section
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="w-11/12 mx-auto md:mx-0 md:w-5/12"
          >
            <div className="h-[500px] rounded-2xl bg-[#f6f6f4] flex items-center justify-center">
              <img src={data.image} className="max-h-96" alt="" />
            </div>
            <Recommendations />
          </motion.section>
          <motion.section
            initial={{ opacity: 0, translateY: 200 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 0.5 }}
            className="md:ml-auto mx-auto w-11/12 md:w-6/12"
          >
            <div>
              <h1 className="text-4xl mb-4">{data.name}</h1>
              <p className="w-9/12 mb-2">{data.description}</p>
              <Rate value={4} />
              (121)
            </div>
            <Divider />
            <div>
              <h1 className="text-2xl mb-1">${data.price} or $30/month</h1>
              <p className="text-sm">
                Suggested payments with 6 month special financing
              </p>
            </div>
            <Divider />
            <div>
              <h1 className="text-2xl">Choose a color</h1>
              <ColorPicker />
            </div>
            <Divider />
            <div className="flex">
              <div className="flex w-44 bg-[#f6f6f6] rounded-full">
                <button
                  className="text-xl p-2 text-center flex-1 hover:bg-[#dad9d9] rounded-s-full transition-all duration-300"
                  onClick={() =>
                    count === 0 ? setCount(0) : setCount(count - 1)
                  }
                >
                  <MinusOutlined />
                </button>
                <span className="text-xl p-2 text-center flex-1">{count}</span>
                <button
                  className="text-xl p-2 text-center flex-1 rounded-e-full hover:bg-[#dad9d9] transition-all duration-300"
                  onClick={() =>
                    count === 12 ? setCount(12) : setCount(count + 1)
                  }
                >
                  <PlusOutlined />
                </button>
              </div>
              <div className="flex flex-col ml-6">
                <p>
                  Only <span className="text-[#e79c5d]">12 items</span> left
                </p>
                <p>Don&apos;t miss it</p>
              </div>
            </div>
            <div className="mt-7">
              <button className="w-5/12 border p-3 rounded-full bg-main text-white hover:border-main hover:bg-white hover:text-main transition-all duration-300 mr-2">
                Buy now
              </button>
              <button className="w-5/12 border border-main p-3 rounded-full text-main hover:bg-main hover:text-white transition-all duration-300">
                Add to cart
              </button>
            </div>
          </motion.section>
        </section>
      ) : (
        <Error />
      )}
    </>
  );
};

export default Details;
