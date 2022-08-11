import Link from "next/Link";
import React, { useState, useEffect } from "react";

type fn = (string) => void;

const Welcome_back: React.FC<{
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
    className={ ` hidden md:block  transition-all   border-red-500   duration-300 ease-in-out  r-0  h-[65vh] w-[25vw] rounded-2xl border-red-300 bg-white px-[24px]  ${
        hide!="welcome"
          ? " absolute bottom-[-100vh]  invisible opacity-0 "
          : "absolute top-[50px] left-[40%] z-20 z-20  visible opacity-100 "
      }`}
    >
     
     <div className=" h-[134px]  border-red-500 lg:mt-0 lg:h-[134px]  lg:pt-[24px] flex flex-col justify-center items-center">
        <div className="border-green-500 text-[24px] font-bold lg:text-[24px]">
            <div className=" border-red-500 w-[100%] flex justify-start items-center pb-[10px]">
          <span
            onClick={() => {
              toggle("None");
            }}
          >
            {" "}
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
          <span className="text-[20px] ml-[10px] text-[#333333] ">Welcome Back! </span>
          </div>
        </div>
       <span className="flex justify-center items-center border border-grey-200 w-[100%] mt-[10px]"></span>
      </div>
    

   
      <div className="h-[242px] mt-[-20px] flex flex-col justify-between   border-yellow-500  lg:mb-0  lg:mt-[-20px]">
        <div className="  border-blue-500 h-[48px]">
          <div className="text-[grey] text-left">You already have an account with you Google account. <span className="text-[13px] text-grey font-semibold">yoofigraham@gmail.com</span>    </div>   
           
                 </div>
               
                 <div className=" border-[#E6E6E6]-500 flex h-[70px] cursor-pointer items-center justify-center rounded-[5px] border text-center text-[16px] font-semibold lg:h-[50px] lg:text-[15px]">
            <svg
              className="mr-[10px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#FBC02D"
              />
              <path
                d="M3.15234 7.3455L6.43784 9.755C7.32684 7.554 9.47984 6 11.9993 6C13.5288 6 14.9203 6.577 15.9798 7.5195L18.8083 4.691C17.0223 3.0265 14.6333 2 11.9993 2C8.15834 2 4.82734 4.1685 3.15234 7.3455Z"
                fill="#E53935"
              />
              <path
                d="M12.0002 22.0003C14.5832 22.0003 16.9302 21.0118 18.7047 19.4043L15.6097 16.7853C14.6057 17.5458 13.3577 18.0003 12.0002 18.0003C9.39916 18.0003 7.19066 16.3418 6.35866 14.0273L3.09766 16.5398C4.75266 19.7783 8.11366 22.0003 12.0002 22.0003Z"
                fill="#4CAF50"
              />
              <path
                d="M21.8055 10.0415L21.7975 10H21H12V14H17.6515C17.2555 15.1185 16.536 16.083 15.608 16.7855C15.6085 16.785 15.609 16.785 15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                fill="#1565C0"
              />
            </svg>
            Continue with Google
          </div>
      <div className=" border-green-500 mb-[20px] text-[#1E40AF] font-semibold text-[12px] underline  ">Login with a different account
      </div>
      </div>
      </div>
    
  );
};

export default Welcome_back;
