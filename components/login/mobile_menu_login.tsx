import Link from "next/Link";
import React, { useState, useEffect } from "react";

type fn = (string) => void;

const Mobile_Menu_Login: React.FC<{
  title?: string;
  hidden?: string;
  toggle: fn;
}> = ({ title = "MMAP", hidden = true, toggle }) => {
  const [hide, setHidden] = useState(hidden);
  useEffect(() => {
    setHidden(hidden);
  }, [hidden]);
  return (
    <div
      className={ `md:hidden  transition-all   border-red-500   duration-300 ease-in-out  r-0  h-[86.73%] w-[100vw] rounded-t-2xl border-red-300 bg-white px-[24px]  ${
        hide!="login"
          ? " absolute bottom-[-100vh]  invisible opacity-0 "
          : "fixed bottom-[0px] left-0 z-20 z-20  visible opacity-100 "
      }`}
    >
     
        <div className=" h-[134px] border-red-500 lg:mt-0 lg:h-[134px]  lg:pt-[24px] flex flex-col justify-center items-center">
          <div className="border-green-500 text-[24px] font-bold lg:text-[24px]">
              <div className=" border-red-500 w-[90vw] flex justify-start items-center pb-[10px]">
            <span
              onClick={() => {
                toggle("None");
              }}
            >
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
            <span className="text-[20px] ml-[10px] text-[#333333] ">Log in to MMAP</span>
            </div>
          </div>
          <div className="  border-green-500 font-[#4D4D4D] text-[15px] text-gray-700 lg:text-[14px]">
            Contributing to the future of upscaling world class professionals
            and industry players
          </div>
        </div>
        <div className="flex    h-[160px] flex-col justify-between border-red-500 lg:mb-0 lg:mt-[24px] lg:h-[115px]">
          <div className="border-[#E6E6E6]-500 flex h-[70px] cursor-pointer items-center justify-center rounded-[5px] border text-center text-[16px] font-semibold lg:h-[50px] lg:text-[15px]">
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
          <div className="border-[#E6E6E6]-500 flex h-[70px] cursor-pointer items-center justify-center rounded-[5px] border text-center text-[16px] font-semibold lg:h-[50px] lg:text-[15px]">
            <svg
              className="mr-[10px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9984 2.39844C6.69684 2.39844 2.39844 6.69684 2.39844 11.9984C2.39844 16.4968 5.49604 20.2608 9.67204 21.3024C9.62724 21.1728 9.59844 21.0224 9.59844 20.836V19.1952C9.20884 19.1952 8.55604 19.1952 8.39204 19.1952C7.73524 19.1952 7.15124 18.9128 6.86804 18.388C6.55364 17.8048 6.49924 16.9128 5.72004 16.3672C5.48884 16.1856 5.66484 15.9784 5.93124 16.0064C6.42324 16.1456 6.83124 16.4832 7.21524 16.984C7.59764 17.4856 7.77764 17.5992 8.49204 17.5992C8.83844 17.5992 9.35684 17.5792 9.84484 17.5024C10.1072 16.836 10.5608 16.2224 11.1152 15.9328C7.91844 15.604 6.39284 14.0136 6.39284 11.8544C6.39284 10.9248 6.78884 10.0256 7.46164 9.26804C7.24084 8.51604 6.96324 6.98244 7.54644 6.39844C8.98484 6.39844 9.85444 7.33124 10.0632 7.58324C10.78 7.33764 11.5672 7.19844 12.3944 7.19844C13.2232 7.19844 14.0136 7.33764 14.732 7.58484C14.9384 7.33444 15.8088 6.39844 17.2504 6.39844C17.836 6.98324 17.5552 8.52324 17.332 9.27364C18.0008 10.0296 18.3944 10.9264 18.3944 11.8544C18.3944 14.012 16.8712 15.6016 13.6792 15.932C14.5576 16.3904 15.1984 17.6784 15.1984 18.6488V20.836C15.1984 20.9192 15.18 20.9792 15.1704 21.0504C18.9112 19.7392 21.5984 16.1872 21.5984 11.9984C21.5984 6.69684 17.3 2.39844 11.9984 2.39844Z"
                fill="black"
              />
            </svg>
            Continue with Github
          </div>
        </div>

        <div className="  flex h-[88px] items-center justify-center border-green-500  text-center  text-[#999999] lg:mb-0 lg:mt-0">
          Or
        </div>
        <div className="h-[150px]  border-red-500  lg:mb-0  lg:mt-0">
          <div className=" border-[#E6E6E6]-500 text-[14px] lg:text-[14px] text-[#333333]">
            E-mail Address
          </div>
          <input
            type="text"
            className="focus:!outline-transparent-500 focus:!shadow-outline h-[55px] w-[100%] appearance-none rounded-[5px] border !border-[#E6E6E6]  !outline-none lg:h-[48px]"
            placeholder="Enter e-mail address"
          />
        </div>

        <div onClick={()=>{toggle("password");}} className="flex h-[52px] mt-[-40px]  cursor-pointer  items-center justify-center rounded-xl border-green-500 bg-primary-700 text-[23px] text-[white] lg:mb-0 lg:mt-0 lg:h-[48px] lg:text-[15px]">
          Login
        </div>
      </div>
    
  );
};

export default Mobile_Menu_Login;
