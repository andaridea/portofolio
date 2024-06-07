  import { useState } from "react";
  import '@fortawesome/fontawesome-free/css/all.css';

  export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };

    return (
      <>
        <nav className="bg-blue-950 border-gray-200 dark:bg-gray-900 fixed w-full top-0 z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                onClick={toggleDropdown}
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-950 focus:outline-none focus:ring-2 focus:ring-orange-200 dark:text-gray-400 dark:hover:bg-blue-950 dark:focus:ring-blue-500"
                aria-controls="navbar-user"
                aria-expanded={isDropdownOpen ? "true" : "false"}
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
              className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
                isDropdownOpen ? "" : "hidden"
              }`}
              id="navbar-user"
            >
              <ul>
                <li className="menu-item bg-blue-950">
                  <a
                    href="#"
                    className="flex items-center block mr-20 text-xl text-orange-200 rounded hover:bg-blue-950 md:hover:bg-blue-950 md:hover:text-orange-300 md:p-0 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-blue-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    <i className="fas fa-home mr-2"></i>
                    Home
                  </a>
                </li>
                <li className="menu-item bg-blue-950">
                  <a
                    href="#projects"
                    className="flex items-center block mr-20 text-xl text-orange-200 rounded hover:bg-blue-950 md:hover:bg-blue-950 md:hover:text-orange-300 md:p-0 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-blue-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <i className="fas fa-lightbulb mr-2"></i>
                    Projects
                  </a>
                </li>
                <li className="menu-item bg-blue-950">
                  <a
                    href="#certificate"
                    className="flex items-center block mr-20 text-xl text-orange-200 rounded hover:bg-blue-950 md:hover:bg-blue-950 md:hover:text-orange-300 md:p-0 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-blue-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <i className="fas fa-award mr-2"></i>
                    Certifications
                  </a>
                </li>
                <li className="menu-item bg-blue-950">
                  <a
                    href="https://drive.google.com/file/d/11GZtHwiOK2YdSHw0PKurVk7yZuUWFxt0/view?usp=sharing"
                    target="_blank"
                    className="flex items-center block mr-20 text-xl text-orange-200 rounded hover:bg-blue-950 md:hover:bg-blue-950 md:hover:text-orange-300 md:p-0 dark:text-white md:dark:hover:text-orange-300 dark:hover:bg-blue-950 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    <i className="fas fa-file mr-2"></i>
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
