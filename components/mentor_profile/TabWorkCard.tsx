import React from "react";
import { Work_experience } from "./tabInterfaces";

const TabWorkCard: React.FC<{ work_experience?: Work_experience }> = ({
  work_experience,
}) => {
  return (
    <div className="">
      <div className="flex flex-col ">
        <span className="text-2xl font-semibold text-[#333333] lg:text-[15px]">
          {work_experience.position}
        </span>
        <span className="text-2xl font-semibold text-[#808080] lg:text-[15px]">
          {work_experience.company}
        </span>
        <span className="text-xl font-bold text-[#333333] lg:text-[12px]">
          {work_experience.first_year} - {work_experience.last_year}
        </span>
      </div>
    </div>
  );
};

export default TabWorkCard;
