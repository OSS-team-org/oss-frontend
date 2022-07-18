import Link from "next/Link";
import React from "react";
import TabList from "./TabList";
import { Education, Work_experience } from "./tabInterfaces";

const TabSwitch: React.FC<{
  title?: string;
  description?: string;
  work_experience?: Work_experience[];
  education?: Education[];
}> = ({
  title = "About",
  description = "No description Found",
  education = [],
  work_experience = [],
}) => {
  if (title == "About") {
    return (
      <div className="flex-center m-[10px] flex w-[100%] rounded-xl border-red-200 bg-[#FAFAFA] p-[10px] py-[10px]  px-[30px] text-justify text-2xl lg:w-[96%] lg:text-[13px] ">
        {description}
      </div>
    );
  } else if (title == "education") {
    return (
      <div className="!m-[10px] w-[100%]  rounded-xl border-red-200 bg-[#FAFAFA]  !p-[0px] lg:w-[96%]">
        <TabList title={title} edu={education} />
      </div>
    );
  }

  return (
    <div className="!m-[10px] w-[100%]  rounded-xl border-red-200 bg-[#FAFAFA] !p-[0px] lg:w-[96%] ">
      <TabList title={title} work_exp={work_experience} />
    </div>
  );
};

export default TabSwitch;
