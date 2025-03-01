import { PiSteeringWheelFill } from "react-icons/pi";
import img from "../assets/heroimg.avif";
import NavBar from "../components/NavBar";
import Second from "../components/HeroComponents/Second";
import Third from "../components/HeroComponents/Third";
import Fourth from "../components/HeroComponents/fourth";
import Fifth from "../components/HeroComponents/Fifth";
import Sixth from "../components/HeroComponents/Sixth";
import Seventh from "../components/HeroComponents/Seventh";
import Eighth from "../components/HeroComponents/Eighth";
import Ninth from "../components/HeroComponents/Ninth";
import Tenth from "../components/HeroComponents/Tenth";
import VideoBg from "../components/HeroComponents/VideoBg";
import Button from "../components/Button";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />

        {/* Navigation */}
        <NavBar />
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col top-30 items-center  text-center text-white ">
          <div className="space-y-2">
            <h1 className="text-8xl font-bold">Model Y</h1>
            <h2 className="text-6xl font-medium ">$299/mo Leasing</h2>
            <hr className="my-3" />
            <p className="text-3xl font-bold ">
              From $31,490* After Est. Savings
            </p>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="primary"> Order Now</Button>
            <Button variant="secondary">View Inventory</Button>
          </div>
        </div>

        {/* fixed under bar */}
        <div className="fixed flex items-center justify-center gap-2 bg-white bottom-0 rounded-t-lg left-0 right-0 z-50 bg-opacity-50 p-4  text-center">
          <PiSteeringWheelFill className="text-[#3E6AE1] text-4xl" />

          <h5 className="text-2xl font-semibold">Schedule a Drive Today</h5>
        </div>
      </div>

      {/* other components */}
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
      <Eighth />
      <Ninth />
      <Tenth />
      <VideoBg />
    </>
  );
};

export default Hero;
