import Lottie from "lottie-react";
import { NotFound } from "../../assets/animations";
const Error = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center">
      <div className="flex flex-col">
        <Lottie animationData={NotFound} autoPlay loop />
      </div>
    </div>
  )
}

export default Error