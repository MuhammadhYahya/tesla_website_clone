import Button from "../Button";
import img2 from "../../assets/heroimg2.avif";
const Second = () => {
  return (
    <>
      {/* second */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <img
          src={img2}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col top-30 bottom-45 items-center justify-between text-center text-white ">
          <div className="space-y-2">
            <h1 className="primary-text">New Model Y</h1>
            <p className="small-text">Deliveries Begin in March</p>
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

export default Second;
