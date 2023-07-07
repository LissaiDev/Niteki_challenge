import { Select } from "antd";
import options from "../../utils/options";
import Items from "../../components/Items";
import { motion } from "framer-motion";
const Home = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <section className="container mx-auto py-5 px-9 bg-call-to-action flex flex-col-reverse md:flex-row">
        <div
          className="md:w-6/12 w-12/12"
      
        >
          <h1 className="text-6xl text-main">
            Grab up to 50% off on selected headphone
          </h1>
          <button className="button">Buy now</button>
        </div>
        <motion.div initial={{opacity: 0 , translateY: -200}}
          animate={{  opacity: 1,translateY: 0 }}
          transition={{ duration: 1, type: "spring", delay: 0.5 }} className="md:w-6/12 w-12/12 flex justify-center">
          <img src="/images/headphones.png" width={"200px"} />
        </motion.div>
      </section>
      <div className="container mx-auto py-3 flex flex-col items-end px-2">
        <p className="mr-2">Sort by</p>

        <Select
          className="w-30"
          defaultValue="price"
          onChange={handleChange}
          options={options}
        />
      </div>
      <Items />
    </>
  );
};

export default Home;
