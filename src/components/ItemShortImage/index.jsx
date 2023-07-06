import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const ItemShortImage = ({itemNumber, image}) => {
  return (
    <Link
      to={`/product/${itemNumber}`}
      className="bg-[#f6f6f4] rounded-xl flex-1 h-32 flex justify-center items-center min-w-fit mb-3 mr-2"
    >
      <img src={image} className="h-28" />
    </Link>
  );
};

export default ItemShortImage;
