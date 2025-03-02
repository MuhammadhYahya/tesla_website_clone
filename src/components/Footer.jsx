const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-md py-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-center md:justify-center font-bold items-center text-gray-500 text-sm px-4">
        <nav className="flex flex-wrap justify-center md:justify-start space-x-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Tesla © 2025
          </a>
          <a href="#">Privacy & Legal</a>
          <a href="#">Vehicle Recalls</a>
          <a href="#">Contact</a>
          <a href="#">News</a>
          <a href="#">Get Updates</a>
          <a href="#">Locations</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
