import img from "../../assets/heroimg4.avif";
import styleImg from "../../assets/styleText.png";
import { FaStar } from "react-icons/fa6";
import Button from "../Button";

const Fourth = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col top-45 bottom-25 items-center justify-between text-center text-white ">
          <div className="space-y-2">
            <img src={styleImg} alt="" className="mx-auto scale-125" />
            <h5 className="small-text">
              $7,500 Federal Tax Credit Available
            </h5>

            <div className="w-fit mx-auto">
              <p className="text-2xl font-bold">$749/mo Leasing</p>
              <hr className="border-t-2 border-white w-full" />
            </div>
          </div>

          <div className="flex flex-col mt-40 items-center text-center">
            {/* Stars */}
            <div className="flex space-x-2 text-white text-3xl">
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
              <FaStar  />
            </div>
            {/* Paragraph */}
            <p className="mt-2 text-xl font-semibold text-white">
              Overall NHTSA Safety Rating
            </p>
          </div>

          <div className="flex gap-4  ">
            <Button variant="dark"> Order Now</Button>
            <Button variant="outline" >Learn More</Button>
         {/* <button className="bg-stone-900/90 border-t-4 border-gray-400 pb-2 text-gray-400 text-lg md:px-32 py-4 sm:px-22 rounded font-medium hover:bg-gray-200 transition-colors cursor-pointer">
              Order Now
            </button>
            <button className="bg-stone-900/90 border-1 border-gray-800 text-gray-400 md:px-32 py-4  sm:px-22  font-bold rounded  hover:bg-gray-200 transition-colors cursor-pointer ">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Fourth;
