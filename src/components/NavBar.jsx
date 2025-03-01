import { useState, useRef, useEffect } from "react";
import { HelpCircle, Globe, User, ChevronRight, X } from "lucide-react";

// Constants for dropdown content
const DROPDOWN_CONTENT = {
  vehicles: {
    items: [
      { name: "Model S", image: "/src/assets/Model S.avif" },
      { name: "Model 3", image: "/src/assets/Model 3.avif" },
      { name: "Model Y", image: "/src/assets/Model Y.avif" },
      { name: "New Model Y", image: "/src/assets/New Model Y.avif" },
      { name: "Model X", image: "/src/assets/Model X.avif" },
      { name: "Cybertruck", image: "/src/assets/Cybertruck.avif" },
      { name: "Inventory", image: "/src/assets/Inventory.avif" },
    ],
    links: [
      "Help Me Choose",
      "Demo Drive",
      "Trade-in",
      "Compare",
      "Help Me Charge",
      "Fleet",
      "Semi",
      "Roadster",
      "Federal Tax Credit",
      "We, Robot",
    ],
  },
  energy: {
    items: [
      { name: "Solar Panels", image: "/src/assets/Solar Panels.avif" },
      { name: "Solar Roof", image: "/src/assets/Solar Roof.avif" },
      { name: "Powerwall", image: "/src/assets/Powerwall.avif" },
      { name: "Megapack", image: "/src/assets/Megapack.avif" },
    ],
    links: [
      "Schedule a Consultation",
      "Why Solar",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial",
      "Utilities",
    ],
  },
  charging: {
    items: [
      { name: "Charging", image: "/src/assets/Charging.avif" },
      { name: "Home Charging", image: "/src/assets/Home Charging.avif" },
      { name: "Supercharging", image: "/src/assets/Supercharging.avif" },
    ],
    links: [
      "Help Me Charge",
      "Charging Calculator",
      "Charging With NACS",
      "Supercharger Voting",
      "Host a Supercharger",
      "Commercial Charging",
      "Host Wall Connectors",
    ],
  },
  discover: {
    sections: [
      {
        title: "Resources",
        links: [
          "Demo Drive",
          "Insurance",
          "Military Purchase Program",
          "Video Guides",
          "Customer Stories",
          "Events",
        ],
      },
      {
        title: "Location Services",
        links: [
          "Find Us",
          "Find a Collision Center",
          "Find a Certified Installer",
        ],
      },
      {
        title: "Company",
        links: ["About", "Careers", "Investor Relations"],
      },
    ],
  },
  shop: {
    items: [
      { name: "Charging", image: "/src/assets/Charging.avif" },
      {
        name: "Vehicle Accessories",
        image: "/src/assets/Vehicle Accessories.avif",
      },
      { name: "Apparel", image: "/src/assets/Apparel.avif" },
      { name: "Lifestyle", image: "/src/assets/Lifestyle.avif" },
    ],
  },
};

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (menu) => {
    clearTimeout(timeoutRef.current);
    setHoveredMenu(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredMenu(null);
    }, 300);
  };

  const renderDropdown = () => {
    const content = DROPDOWN_CONTENT[hoveredMenu];
    if (!content) return null;

    return (
      <div
        className={`flex justify-center absolute left-0 top-full   z-50 bg-white shadow-lg p-8  transition-all duration-300 overflow-y-auto w-dvw h-[650px]`}
        onMouseEnter={() => clearTimeout(timeoutRef.current)}
        onMouseLeave={handleMouseLeave}
      >
        {content.items && (
          <div className="flex">
            {hoveredMenu !== "shop" && hoveredMenu !== "discover" && (
              <>
                <div className="grid grid-cols-3 gap-4">
                  {content.items.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-2 p-2"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full object-cover"
                      />
                      <span className="text-center">{item.name}</span>
                      <div className="flex space-x-4 mt-2 underline">
                        <a className="text-gray-400">Learn</a>
                        <a className="text-gray-400">Order</a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="h-[700px] min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
                <div className="flex flex-col w-[500px] justify-center align-middle">
                  {content.links.map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      className="p-3 font-semibold hover:underline"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </>
            )}
            {hoveredMenu === "shop" && (
              <div className="flex justify-center py-10 bg-white">
                <div className="grid grid-cols-4 gap-4 text-center">
                  {content.items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full object-cover"
                      />
                      <p className="mt-3 font-bold text-2xl">{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
        {content.sections && (
          <div className="flex justify-center py-10 bg-white">
            <div className="grid grid-cols-3 gap-16 text-sm text-gray-700">
              {content.sections.map((section, index) => (
                <div key={index}>
                  <h3 className="font-bold text-gray-500 mb-3 text-[18px]">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 text-black text-[18px]">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a href="#" className="hover:underline">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <nav className="absolute top-0 w-full">
      <div className="group relative">
        <div className="mx-auto flex items-center justify-between py-6 px-8 transition-all duration-300 md:group-hover:bg-white">
          <div className="flex-shrink-0 cursor-pointer">
            <svg
              className="w-38 fill-white md:group-hover:fill-black transition-colors duration-300"
              viewBox="0 0 342 35"
            >
              <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" />
            </svg>
          </div>

          <ul className="hidden md:flex space-x-6 text-lg font-bold text-white group-hover:text-black transition-colors duration-300">
            {Object.keys(DROPDOWN_CONTENT).map((menu) => (
              <li
                key={menu}
                className="relative group cursor-pointer"
                onMouseEnter={() => handleMouseEnter(menu)}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="px-4 py-2 bg-transparent hover:bg-gray-300 transition rounded"
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </a>
              </li>
            ))}
          </ul>

          <ul className="hidden md:flex space-x-6 font-medium text-white">
            {[HelpCircle, Globe, User].map((Icon, index) => (
              <a href="#" key={index}>
                <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
              </a>
            ))}
          </ul>

          <button
            className="md:hidden text-white text-xl font-semibold bg-blue-200/25 rounded-sm border-none px-4 py-2 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Menu
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col font-medium p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 p-2"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="mt-16 px-6">
              <nav>
                <ul className="space-y-6 font-bold text-2xl">
                  {Object.keys(DROPDOWN_CONTENT).map((menu) => (
                    <li
                      key={menu}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <a href="#" className="text-gray-900">
                        {menu.charAt(0).toUpperCase() + menu.slice(1)}
                      </a>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-8 pt-6">
                <button className="w-full flex items-center justify-between text-lg cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5" />
                    <span>United States</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
                <div className="text-sm text-gray-500 ml-7 mt-1">English</div>
              </div>
            </div>
          </div>
        )}

        {hoveredMenu && renderDropdown()}
      </div>
    </nav>
  );
};

export default NavBar;
