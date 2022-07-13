import Link from "next/Link";
import React from "react";

const Header: React.FC<{ navTitle?: string }> = ({ navTitle = "MMAP" }) => {
  return (
    <div className="mx-auto max-w-5xl">
      <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-800 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="self-center whitespace-nowrap pl-4 text-xl font-semibold text-primary-600 dark:text-white md:p-0">
              {navTitle}
            </span>
          </Link>
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="text-sm inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className="hidden w-full items-center justify-between py-4 md:order-1 md:flex md:w-auto"
            id="mobile-menu-4"
          >
            <ul className="align-center md:text-sm mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:font-semibold">
              <li>
                <Link href="/">
                  <a
                    className="block rounded bg-blue-700 py-2 pr-4 pl-3 text-white dark:text-white md:bg-transparent md:text-gray-800"
                    aria-current="page"
                  >
                    Find a Mentor
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block border-b border-gray-100 py-2 pr-4 pl-3 text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:dark:hover:bg-transparent md:dark:hover:text-white">
                    Become a mentor
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block rounded-lg border-b border-gray-300 py-2 pr-4 pl-3 text-primary-700 hover:bg-gray-50 md:border">
                    Log In
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a className="block rounded-lg border-b border-gray-100 py-2 pr-4 pl-3 text-white md:border-0 md:bg-primary-700">
                    Sign Up
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
