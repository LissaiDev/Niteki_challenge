import { image3, image5, image7, image9 } from "../../assets/images";
import ItemShortImage from "../ItemShortImage";
const Recommendations = () => {
  return (
    <div className="flex mt-5 mb-3 flex-wrap">
      <ItemShortImage itemNumber={3} image={image3}/>
      <ItemShortImage itemNumber={5} image={image5}/>
      <ItemShortImage itemNumber={7} image={image7}/>
      <ItemShortImage itemNumber={9} image={image9}/>
    </div>
  );
};

export default Recommendations;
