import img from "../../assets/heroimg6.avif";
import Button from "../Button";
const Sixth = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col top-30 bottom-25 items-center justify-between text-center text-white ">
          <div className="space-y-2">
            <h1 className="primary-text">Model S</h1>
            <p className="small-text">Free Supercharging Included</p>
            <div className="w-fit mx-auto">
              <p className="text-2xl font-bold">$998/mo Leasing</p>
              <hr className="border-t-2 border-white w-full" />
            </div>
          </div>

          <div className="flex gap-4 ">
            <Button variant="primary"> Order Now</Button>
            <Button variant="secondary">Learn More</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sixth;
