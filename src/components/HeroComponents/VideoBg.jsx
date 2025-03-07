import videoSrc from "../../assets/videoplayback.webm";

const VideoBg = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video
        src={videoSrc}
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
        id="backgroundVideo"
      ></video>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex md:items-center pl-16 text-white">
        <div className="space-y-6">
          <h1 className="absolute text-4xl font-semibold bottom-28 md:top-76">We Are Tesla</h1>
         {/* Button for larger screens (hidden on small screens) */}
         <button className="hidden md:block bg-white text-black text-lg px-24 py-4 rounded font-medium hover:bg-gray-200 transition cursor-pointer">
          Join Tesla
        </button>
        </div>
          {/* Button for small screens (Full width & at the bottom) */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:hidden">
        <button className="w-full bg-white text-black text-lg py-4 rounded font-medium hover:bg-gray-200 transition cursor-pointer">
          Join Tesla
        </button>
      </div>
      </div>
    </div>
  );
};

export default VideoBg;