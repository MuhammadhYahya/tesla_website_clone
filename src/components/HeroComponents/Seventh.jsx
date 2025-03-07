import Button from "../Button";
import img from "../../assets/heroimg7.avif";
const Seventh = () => {
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
            <h1 className="primary-text">Solar Panels</h1>
            <div className="w-fit mx-auto">
              <h2 className="md:text-5xl text-3xl font-medium ">
                Schedule a Virtual Consultation
              </h2>
              <hr className="border-t-2 border-white w-full" />
            </div>
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

export default Seventh;
