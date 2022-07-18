import React from "react";

function Banner() {
  return (
    <section className=" bg-[#EBF3D8]">
      <div className="space-y-2 px-8 pt-12 pb-28 text-center md:flex md:flex-col md:justify-center md:space-y-6 md:py-32 md:align-middle">
        <h1 className="text-xl font-bold text-[#333333] md:text-5xl">
          World class Mentors
        </h1>
        <p className="md:text-lg font-semibold text-[#808080]">
          Contributing to the future of upscaling world class professionals and{" "}
          <br className="hidden md:inline" />
          industry players.
        </p>
      </div>
    </section>
  );
}

export default Banner;
