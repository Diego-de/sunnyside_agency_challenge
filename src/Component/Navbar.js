import '../index.css';
import { useState } from 'react';



function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="lg">
      <nav className="items-center justify-between flex bg-teal-500 p-6 w-full fixed h-[64px]">
        <div className="w-full flex items-center p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6 w-5/6">
            <a href="/" className="text-2xl ml-0 mr-32 font-bold text-stone-200 sm:mr-74">
              sunnyside
            </a>
          </div>
          <button
            className="block md:hidden flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white z-10"
            data-collapse-toggle="navbar-default"
            type="button"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isMenuOpen ? 'fixed' : 'hidden'
            } top-0 mt-0 right-0 bottom-0 w-full md:w-auto md:static md:block md:ml-0 md:pt-0 md:bg-transparent md:flex md:items-center md:p-0`}

        >
          <ul className="flex flex-col space-y-4 mt-4 mb-12 md:space-y-0 md:flex-row md:space-x-10" id="navbar-default">
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ">
              <a href='#About' className="text-stone-200 ">About</a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <a  href='#Services' className="text-stone-200">Services</a>
            </li>
            <li className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
              <a href='#Projects' className="text-stone-200">Projects</a>
            </li>
            <li className="relative" id="li3">
              <a className="text-teal-800">
                <span className="rounded-full bg-white p-3 pr-6 pl-6 font-black  ">CONTACT</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );

}

export default Navbar;