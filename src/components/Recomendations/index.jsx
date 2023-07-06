import { image3, image5, image7, image9 } from "../../assets/images";
const Recommendations = () => {
  return (
    <div className="flex mt-5 mb-3 flex-wrap">
      <a
        href="#"
        className="bg-[#f6f6f4] rounded-xl flex-1 h-32 flex justify-center items-center min-w-fit mb-3 mr-2"
      >
        <img src={image5} className="h-28" />
      </a>
      <a
        href="#"
        className="bg-[#f6f6f4] rounded-xl flex-1 h-32 flex justify-center items-center min-w-fit mb-3 mr-2"
      >
        <img src={image3} className="h-28" />
      </a>
      <a
        href="#"
        className="bg-[#f6f6f4] rounded-xl flex-1 h-32 flex justify-center items-center min-w-fit mb-3 mr-2"
      >
        <img src={image7} className="h-28" />
      </a>
      <a
        href="#"
        className="bg-[#f6f6f4] rounded-xl flex-1 h-32 flex justify-center items-center min-w-fit mb-3 mr-2"
      >
        <img src={image9} className="h-28" />
      </a>
    </div>
  );
};

export default Recommendations;
