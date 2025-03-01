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
      <div className="absolute inset-0 flex items-center justify-start pl-16 text-white">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">We Are Tesla</h1>
          <button className="bg-white text-black text-lg md:px-24 py-4  sm:px-22  rounded font-medium hover:bg-gray-200 transition cursor-pointer">
            Join Tesla
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBg;
