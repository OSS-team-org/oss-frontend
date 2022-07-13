import Link from 'next/Link';
import React from 'react'
import { Education } from "./tabInterfaces";



const TabEducationCard:React.FC<{education?:Education}>=({
    education
})=> {
  return (
    <div className="max-w-5xl mx-auto flex justify-between">
          <div className='flex flex-col'>
              <span className='text-2xl  lg:text-[15px] font-semibold text-[#333333]'>{education?.areaOfStudy}</span>
              <span className='text-2xl  lg:text-[15px] font-semibold text-[#808080]'>{education.school}</span>
              <span className='text-xl lg:text-[13px] font-semibold text-[#333333]'>{education.first_year} - {education.last_year}</span>
              </div>  
           
    </div>
  )
}

export default TabEducationCard;