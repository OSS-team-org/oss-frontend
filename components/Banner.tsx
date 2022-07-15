import Image from "next/future/image";
import hero from "../public/hero.png";
import React from "react";

function Banner() {
  return (
    <div>
      <div className="mx-10 mt-6 mb-12 border border-red-500 px-8 text-center md:mt-24 md:items-center">
        <h2 className="border border-red-500 text-4xl font-bold text-gray-800 md:text-6xl md:leading-tight">
          Encouraging industry growth & closing skills gap
        </h2>
        <h5 className="border border-red-500 pt-4 text-base font-normal text-gray-light md:text-2xl md:font-bold md:leading-7">
          Contributing to the future of upscaling world class professionals and
          industry players.
        </h5>

        <div className="my-8 mx-auto flex flex-wrap justify-center gap-4">
          <a
            className="text-sm block w-full cursor-pointer rounded-lg bg-primary-700 px-12 py-3 font-bold text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700 sm:w-auto"
            href="#"
          >
            Find a Mentor
          </a>
          <a
            className="text-sm block w-full cursor-pointer rounded-lg border border-gray-200 px-12 py-3 font-bold text-primary-700 shadow hover:text-primary-600 focus:outline-none focus:ring active:text-primary-700 sm:w-auto"
            href="#"
          >
            Become a Mentor
          </a>
        </div>
      </div>
      <div className="mb-24">
        <Image
          className="h-[35rem] w-full object-cover lg:rounded-md"
          src={hero}
          alt="Hero image"
        />
      </div>
    </div>
  );
}

export default Banner;
