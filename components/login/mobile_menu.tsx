import Link from "next/Link";
import React, { useState, useEffect } from "react";

type fn = (string) => void;

const Mobile_Menu: React.FC<{
  title?: string;
  hidden?: string;
  toggle: fn;
}> = ({ title = "MMAP", hidden = "None",toggle }) => {
  const [hide, setHidden] = useState(hidden);
  useEffect(() => {
    setHidden(hidden);
  }, [hidden]);
  return (
    <div
      className={`md:hidden   transition-all  border-red-500   duration-300 ease-in-out  h-[329px] w-[100vw] border-red-300 bg-white px-[24px]
        ${hide!="main_menu"
          ? " top-[-329px] absolute invisible opacity-0"
          : "z-20 fixed top-0 left-0 z-20 visible opacity-100  "}`
        
      }
    >
      <div className="  flex h-[57px] flex-row items-center justify-between">
        <span className="text-xl font-semibold text-primary-700 dark:text-white">
          {title}
        </span>
        <span onClick={()=>{toggle("None");}}>
          {" "}
          <svg
            width={24}
            height={25}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.5c5.5 0 10-4.5 10-10s-4.5-10-10-10S2 7 2 12.5s4.5 10 10 10ZM9.17 15.33l5.66-5.66M14.83 15.33 9.17 9.67"
              stroke="#333"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className=" flex h-[64px]  items-center text-[16px] font-bold ">
        Find a mentor
      </div>
      <div className=" flex h-[64px]  items-center text-[16px] font-bold">
        Become a mentor
      </div>
      <div className="  flex h-[120px] flex-col  justify-between">
        <div onClick={()=>toggle("login")} className="border-grey-100 flex h-[44px] cursor-pointer  items-center  justify-center rounded border bg-white text-[16px] text-[#5C7425]  lg:mb-0 lg:mt-0 lg:h-[48px] lg:text-[15px]">
          Login
        </div>
        <div  onClick={()=>{toggle("signup");}} className="flex h-[44px]  cursor-pointer  items-center justify-center rounded border-green-500 bg-primary-700 text-[16px] text-[white] lg:mb-0 lg:mt-0 lg:h-[48px] lg:text-[15px]">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Mobile_Menu;
