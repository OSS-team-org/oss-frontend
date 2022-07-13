import Link from "next/Link";
import React from "react";
import TabEducationCard from "./TabEducationCard";
import TabWorkCard from "./TabWorkCard";
import { Education, Work_experience } from "./tabInterfaces";

const TabList: React.FC<{
  title: string;
  edu?: Education[];
  work_exp?: Work_experience[];
}> = ({ title, work_exp, edu }) => {
  if (title == "education") {
    return (
      <div className="lg:!w-[100%]  w-[90vw]  px-[5px]   ">
        {edu.map((education) => {
          return (
            <div
              className="flex justify-between
            flex justify-between"
            >
              <div className=" w-[70%] py-[10px]">
                <TabEducationCard education={education} />
              </div>
              <div className=" border-red-200 w-[100px] flex justify-center items-center">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0495 2.5293L4.02953 6.4593C2.09953 7.7193 2.09953 10.5393 4.02953 11.7993L10.0495 15.7293C11.1295 16.4393 12.9095 16.4393 13.9895 15.7293L19.9795 11.7993C21.8995 10.5393 21.8995 7.7293 19.9795 6.4693L13.9895 2.5393C12.9095 1.8193 11.1295 1.8193 10.0495 2.5293Z"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.62914 13.0801L5.61914 17.7701C5.61914 19.0401 6.59914 20.4001 7.79914 20.8001L10.9891 21.8601C11.5391 22.0401 12.4491 22.0401 13.0091 21.8601L16.1991 20.8001C17.3991 20.4001 18.3791 19.0401 18.3791 17.7701V13.1301"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.4004 15V9"
                      stroke="#999999"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
             
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="lg:!w-[100%] w-[90vw] px-[5px]  ">
      {work_exp.map((work_experience) => {
        return (
          <div
            className="flex justify-between
          flex justify-between  "
          >
            <div className=" w-[70%] py-[10px]">
              <TabWorkCard work_experience={work_experience} />
            </div>
            <div className=" w-[100px] flex justify-center items-center">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.61914 11.2695C4.86914 12.8095 7.40914 13.7395 9.99914 14.0295"
                    stroke="#999999"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
           
          </div>
        );
      })}
    </div>
  );
};

export default TabList;
