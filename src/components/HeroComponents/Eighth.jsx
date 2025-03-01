import img from "../../assets/heroimg8.avif";
import Button from "../Button";
const Eighth = () => {
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
            <h1 className="text-8xl font-bold">Solar Roof</h1>

            <h2 className="text-5xl font-medium ">
              Produce Clean Energy From Your Roof
            </h2>
          </div>

          <div className="flex gap-4 mt-8">
          <Button variant="primary"> Order Now</Button>
          <Button variant="secondary">View Inventory</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eighth;
