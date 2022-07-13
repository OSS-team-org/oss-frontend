import Link from "next/Link";
import React from "react";
import { Education } from "./tabInterfaces";

const TabEducationCard: React.FC<{ education?: Education }> = ({
  education,
}) => {
  return (
    <div className="mx-auto flex max-w-5xl justify-between">
      <div className="flex flex-col">
        <span className="text-2xl  font-semibold text-[#333333] lg:text-[15px]">
          {education?.areaOfStudy}
        </span>
        <span className="text-2xl  font-semibold text-[#808080] lg:text-[15px]">
          {education.school}
        </span>
        <span className="text-xl font-semibold text-[#333333] lg:text-[13px]">
          {education.first_year} - {education.last_year}
        </span>
      </div>
    </div>
  );
};

export default TabEducationCard;
