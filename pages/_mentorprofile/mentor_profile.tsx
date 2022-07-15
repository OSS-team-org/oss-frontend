import React, { useState } from "react";
import Head from "next/head";
import Header from "../../components/HomePage/Header";
import Footer from "../../components/HomePage/Footer";
import TabSwitch from "../../components/MentorProfile/TabSwitch";
import {
  Education,
  Work_experience,
} from "../../components/MentorProfile/tabInterfaces";
import Image from "next/future/image";
import Ivy from "../../public/ivy.png";

export default function Mentor_Profile() {
  const active: string =
    "border z-50  border-[0px] border-b-[7px] lg:border-b-[4px] border-[#5C7425] py-[10px] ease-in duration-75 delay-75";
  const activeText: string =
    "lg:text-[15px] text-[20px] font-extrabold  text-[#5C7425] ease-in duration-75 delay-75 ";
  const [Tags, setTags] = useState<Array<string>>([
    "Career growth",
    "Career advice",
    "Women empowerment",
    /*  "Leadership",
    "Job Search",
    "Mentorship", */
  ]);
  const workExperiences: Work_experience[] = [
    {
      position: "Programs Manager",
      company: "Microsoft",
      first_year: "2019",
      last_year: "Present",
    },
    {
      position: "Founder",
      company: "Developers In Vogue",
      first_year: "2017",
      last_year: "Present",
    },
  ];
  const educational_info: Education[] = [
    {
      areaOfStudy: "MPhil Mathematical Statistics",
      school: "Kwame Nkrumah University Of Science and Technology",
      first_year: "2012",
      last_year: "2016",
    },
    {
      areaOfStudy: "Bachelors degree in Actuarial Science",
      school: "Kwame Nkrumah University Of Science and Technology",
      first_year: "2016",
      last_year: "2017",
    },
    {
      school: "Aburi Girls Senior High School",
      first_year: "2009",
      last_year: "2012",
    },
  ];
  const [description, setDescription] = useState<string>(
    "A Ghanaian entrepreneur, program manager and women in tech activist. I am a co-founder of Developers in Vogue, an organization that is paving the way for more African women to take up opportunities in the tech industry. In January 2022,... Show more"
  );
  const [Work_exp, setWork_exp] =
    useState<Array<Work_experience>>(workExperiences);
  const [Education, setEducation] =
    useState<Array<Education>>(educational_info);
  const [Tab, setTab] = useState<string>("About");

  return (
    <div className="!overflow-x-hidden">
      <Head>
        <title>Profile </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navTitle="Mentor Connect" />

      {/**Banner */}
      <main className="w-[100vw] border-red-500 pt-4 md:mx-auto md:mb-48  md:max-w-6xl lg:w-[100vw] ">
        {/**Profile_picture_section */}
        <div className="   flex  h-[auto] flex-col items-center justify-around border-yellow-500 lg:h-[100%] lg:flex-row lg:items-stretch lg:justify-between">
          <div className=" my-[20px] flex h-[50vh] w-[90vw]  items-center justify-center border-blue-700 pr-4 lg:m-[0]   lg:h-[auto] lg:w-[35%]">
            <Image
              className="h-[80px] w-[80px]  rounded-2xl object-cover lg:min-h-[510px] lg:w-[100%] lg:rounded-md  "
              src={Ivy}
              alt="Hero image"
            />
          </div>
          <div className="border-blue-0 flex flex-col items-center justify-start   lg:!w-[64%] lg:items-start">
            <div className="border-pink-0 mb-[50px] flex min-h-[150px]    w-[60%] flex-col items-center justify-between  border-blue-200 lg:mb-[0] lg:min-h-[120px] lg:min-w-[98%] lg:items-start  lg:justify-evenly lg:pl-[0px]">
              <div className="  flex border-blue-200 lg:w-[100%] lg:flex-row lg:items-center lg:justify-between">
                <div className="text-3xl font-extrabold text-[#333333] lg:text-[18px] ">
                  Ivy Barley
                </div>
                <div className="text-[bold] hidden h-[50px] w-[150px] cursor-pointer flex-row items-center justify-center rounded-lg border border-pink-200 bg-primary-700 shadow  hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700 lg:flex ">
                  <div className="text-[white]">Book A Session</div>
                </div>
              </div>

              <div className="text-center text-[22px] font-bold text-[#333333] lg:text-[15px] ">
                Programs Manager - Microsoft
              </div>
              <div className="!mx-[-35px] flex w-[100%]  justify-around border-red-100   text-[25px] lg:m-0 lg:mx-[0] lg:!ml-[0px] lg:w-[25%] lg:justify-between lg:text-[15px]">
                <div>Ghana</div> <div>languages +3more</div>
              </div>
            </div>

            <div className="border-pink-0 mb-[50px]  grid h-[auto] w-[90%] grid-cols-3 gap-x-1  gap-y-5 p-2 lg:mb-[10px]  lg:w-[68%] lg:gap-y-2 lg:pl-[0px] ">
              {Tags?.map((tag, i) => {
                return (
                  <div
                    key={""}
                    className=" border-[#D8D3E3]-0  flex h-[45px] w-[auto] flex-col items-center justify-items-center rounded-3xl border font-bold text-[#3D2574] lg:h-[28px] lg:min-w-[10px] lg:font-semibold"
                  >
                    <span className=" flex grow flex-col justify-center text-[16px] lg:text-[12px]">
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="border-pink-0 mb-[50px]  flex h-[auto] w-[90%] justify-center gap-[4px] lg:hidden">
              <a
                className="  xs:!text-[250px] flex h-[65px]  w-[100%] cursor-pointer items-center  justify-center rounded-lg bg-primary-700 px-12 py-3 text-2xl font-bold text-white  shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700"
                href="#"
              >
                Book a session
              </a>
            </div>
            {/* Tab section */}
            <div className="mb-[-5px] flex w-[100%] justify-center lg:mb-[-13px] lg:w-[90%] lg:justify-start lg:pl-[0px] ">
              {/* Tab Titles */}
              <div className="flex   h-[70px] w-[90%] items-center justify-between px-[10px] lg:w-[40%] lg:px-[0]">
                <div
                  onClick={() => setTab("About")}
                  className={Tab == "About" ? active : ""}
                >
                  <span
                    className={
                      Tab == "About"
                        ? activeText
                        : "cursor-pointer text-2xl delay-75 duration-75 ease-in lg:text-[15px]"
                    }
                  >
                    About
                  </span>
                </div>
                <div
                  onClick={() => setTab("work_experience")}
                  className={
                    Tab == "work_experience"
                      ? active
                      : "cursor-pointer text-2xl delay-75 duration-75 ease-in lg:text-[10px]"
                  }
                >
                  <span
                    className={
                      Tab == "work_experience"
                        ? activeText
                        : "cursor-pointer text-2xl delay-75 duration-75 ease-in lg:text-[15px]"
                    }
                  >
                    Work experience
                  </span>
                </div>
                <div
                  onClick={() => setTab("education")}
                  className={Tab == "education" ? active : ""}
                >
                  <span
                    className={
                      Tab == "education"
                        ? activeText
                        : " cursor-pointer text-2xl lg:text-[15px]"
                    }
                  >
                    Education
                  </span>
                </div>
              </div>
            </div>
            <div className=" border-pink-0 flex-center flex h-[auto] w-[auto] border-b-0 border-t-2 lg:w-[100%]">
              <TabSwitch
                title={Tab}
                description={description}
                education={Education}
                work_experience={Work_exp}
              />
            </div>
          </div>
        </div>
      </main>

      <div className="mt-24 lg:mt-0">
        <Footer />
      </div>
    </div>
  );
}
