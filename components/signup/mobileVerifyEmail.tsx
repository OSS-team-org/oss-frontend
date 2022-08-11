import Link from "next/Link";
import React, { useState, useEffect } from "react";

type fn = (string) => void;

const Mobile_Verify_Email_Entry: React.FC<{
  title?: string;
  hidden?: string;
  toggle: fn;
}> = ({ title = "MMAP", hidden = "None", toggle }) => {
  const [hide, setHidden] = useState(hidden);
  useEffect(() => {
    setHidden(hidden);
  }, [hidden]);
  return (
    <div
      className={`  transition-all  border-red-500   duration-300 ease-in-out r-0 z-20 z-20 h-[438px] w-[100vw] rounded-t-2xl border-red-300 bg-white px-[24px] ${
        hide!="verify"
          ? "block absolute bottom-[-100vh] invisible opacity-0"
          : "block fixed bottom-0 left-0 visible opacity-100 "
      }`}
    >
     
        <div className=" h-[134px]  border-red-500 lg:mt-0 lg:h-[134px]  lg:pt-[24px] flex flex-col justify-center items-center">
          <div className="border-green-500 text-[24px] font-bold lg:text-[24px]">
              <div className=" border-red-500 w-[90vw] flex justify-start items-center pb-[10px]">
            <span
              onClick={() => {
                toggle("signup");
              }}
            >
              {" "}
              <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    
  >
    <path
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      stroke="#333"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.26 15.53 9.74 12l3.52-3.53"
      stroke="#333"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
            </span>
            <span className="text-[20px] ml-[10px] text-[#333333] ">Verify your e-mail </span>
            </div>
          </div>
         <span className="flex justify-center items-center border border-grey-200 w-[90vw] mt-[10px]"></span>
        </div>
      

     
        <div className="h-[300px] mt-[-20px] flex flex-col justify-between   border-yellow-500  lg:mb-0  lg:mt-0">
          <div className=" border-blue-500 h-[48px]">
            <div className="text-[grey]">An email with a siz digit code will be sent to</div>   
            <div className="text font-semibold">yoofi-graham@gmail.com</div>   
                   </div>
                   <div>
          <div className=" border-[#E6E6E6]-500 text-[14px] lg:text-[14px] text-[#333333]">
            6 digit code
          </div>
          <input
            type="number"
            className="focus:!outline-transparent-500 focus:!shadow-outline h-[55px] w-[100%] appearance-none rounded-[5px] border !border-[#E6E6E6]  !outline-none lg:h-[48px]"
            placeholder="000000"
          />
          </div>
          <div onClick={()=>{toggle("create")}} className="flex h-[52px]   cursor-pointer  items-center justify-center rounded-xl border-green-500 bg-primary-700 text-[23px] text-[white] lg:mb-0 lg:mt-0 lg:h-[48px] lg:text-[15px]">
          Verify e-mail
        </div>
       {/*  <div className="mt-[10px] text-[#1E40AF] font-semibold text-[12px] underline  ">Don't have an account?Sign Up
        </div> */}
        </div>

        
      </div>
    
  );
};

export default Mobile_Verify_Email_Entry;
