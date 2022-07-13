import Link from 'next/Link';
import React from 'react'
import { Work_experience } from "./tabInterfaces";



const TabWorkCard:React.FC<{work_experience?:Work_experience}>=({
    work_experience
})=> {
  return (
    <div className="">
          <div className='flex flex-col '>
              <span className='text-2xl lg:text-[15px] font-semibold text-[#333333]'>{work_experience.position}</span>
              <span className='text-2xl lg:text-[15px] font-semibold text-[#808080]'>{work_experience.company}</span>
              <span className='text-xl lg:text-[12px] font-bold text-[#333333]'>{work_experience.first_year} - {work_experience.last_year}</span>
              </div>  
            
    </div>
  )
}

export default TabWorkCard;