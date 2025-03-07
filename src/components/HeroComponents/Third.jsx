import Button from "../Button";
import img from "../../assets/heroimg3.avif";
const Third = () => {
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={img}
          className="w-full h-screen object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 flex flex-col justify-between top-20 bottom-20 items-center  text-center text-white ">
          <div className="space-y-2">
            <h1 className="primary-text">Model 3</h1>
            <div className="w-fit mx-auto">
              <h2 className="secondary-text">
                $249/mo Lease Ending March 3
              </h2>
              <hr className="border-t-2 border-white w-full" />
            </div>
            <p className="small-text">
              From $29,9902 After Est. Savings
            </p>
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

export default Third;
