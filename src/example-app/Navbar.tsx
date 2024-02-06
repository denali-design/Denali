import exampleLogo from './../example-app/assets/logo-icon.svg';

const Navbar = () => {
  return (
    /* Container for the navigation bar */
    <nav className="border-stroke sticky border-b bg-white shadow-sm canvas type">
      {/* Flex container for the navigation content */}
      <div className="px-space-6">
        <div className="flex justify-between">
          {/* Logo and brand name */}
          <div className="flex items-center">
            {/* Website Logo */}
            <a href="#" className="mr-space-4 flex items-center">
              <img
                className="mr-1 block h-8 w-8"
                src={exampleLogo}
                alt="Example App"
              />
              {/* This should be done better: */}
              <span className="text-2xl font-semibold ">Example App</span>
            </a>
            {/* Primary Navbar items */}
            <div className="hidden items-center space-x-1 md:flex">
              <a
                href="#"
                className="hover: px-2 py-4  font-normal transition duration-300"
              >
                Projects
              </a>
              <a
                href="#"
                className="hover: px-2 py-4  font-normal transition duration-300"
              >
                Teams
              </a>
              <a
                href="#"
                className="hover: px-2 py-4  font-normal transition duration-300"
              >
                Apps
              </a>
            </div>
          </div>
          {/* Secondary Navbar items */}
          <div className="hidden items-center space-x-3 md:flex ">
            <a
              href="#"
              className="hover: px-2 py-4  font-normal transition duration-300"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded bg-gray-500 px-2 py-2 font-medium text-white transition duration-300 hover:bg-gray-400"
            >
              Sign Up
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button className="mobile-menu-button outline-none">
              <svg
                className=" hover: h-6  w-6 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="mobile-menu hidden">
        <ul className="">
          <li className="active">
            <a
              href="#"
              className="block bg-gray-500 px-2 py-4 text-sm font-normal text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-gray-500"
            >
              Teams
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-gray-500"
            >
              Apps
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-2 py-4 text-sm transition duration-300 hover:bg-gray-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
