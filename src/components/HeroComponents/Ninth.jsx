import img from "../../assets/heroimg9.avif";
import Button from "../Button";
const Ninth = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col justify-between top-20 bottom-30 items-center  text-center text-white ">
          <div className="space-y-2">
            <h1 className="md:text-7xl text-6xl font-bold">Powerwall</h1>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="primary"> Order Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ninth;
