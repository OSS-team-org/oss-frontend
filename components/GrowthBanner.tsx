import Image from "next/future/image";
import growth from "../public/growth.png";
import React from "react";

function GrowthBanner() {
  return (
    <div>
      {" "}
      <div className="mt-24 px-6">
        <h5 className="pb-1 text-2xl font-semibold">Growth</h5>
        <p className="text-base font-normal">
          Some description about growth can go here
        </p>
      </div>
      <div className="flex">
        <Image
          src={growth}
          alt=""
          className="mt-8 w-[100%] rounded-md object-cover shadow-lg md:w-[590px]"
        />
        <div className="mt-8 flex justify-around">
          <div>
            <h5 className="text-2xl font-bold text-primary-600">120K+</h5>
            <p className="text-base text-gray-light">Mentees</p>
          </div>
          <div>
            <h5 className="text-2xl font-bold text-primary-600">32K+</h5>
            <p className="text-gray-light">Mentors</p>
          </div>
          <div>
            <h5 className="text-2xl font-bold text-primary-600">5.3M+</h5>
            <p className="text-gray-light">Sessions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GrowthBanner;
