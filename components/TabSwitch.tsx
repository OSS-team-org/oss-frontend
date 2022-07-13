import Link from 'next/Link';
import React from 'react'
import TabList from './TabList';
import {Education,Work_experience} from "./tabInterfaces";

const TabSwitch:React.FC<{title?:string,description?:string,work_experience?:Work_experience[],education?:Education[]}>=({
    title="About",
    description="No description Found",
    education=[],
    work_experience=[]
})=> {
    if(title=="About"){
        return (
            <div className='w-[100%] lg:w-[96%] flex flex-center py-[10px] px-[30px] lg:text-[13px] text-2xl text-justify  border-red-200 m-[10px] p-[10px] rounded-xl bg-[#FAFAFA] '>
                {description}
            </div>
        )
    }
    else if (title=="education"){
        return(
            <div className='w-[100%] lg:w-[96%]  border-red-200 !m-[10px] !p-[0px]  rounded-xl bg-[#FAFAFA]'>
                <TabList title={title} edu={education} />
            </div>
        )
    }

  return (
    <div className="w-[100%] lg:w-[96%]  border-red-200 !m-[10px] !p-[0px] rounded-xl bg-[#FAFAFA] ">
                <TabList title={title} work_exp={work_experience} />
    </div>
  )
}

export default TabSwitch;