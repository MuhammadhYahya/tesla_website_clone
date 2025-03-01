import img from "../../assets/heroimg10.avif";
import Button from "../Button";
const Tenth = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col justify-between top-20 bottom-25 items-center  text-center text-white ">
          <div className="space-y-2">
            <h1 className="text-7xl font-bold">Accessories</h1>
          </div>

          <div className="flex gap-4 mt-8">
            <Button variant="primary">Shop Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tenth;
