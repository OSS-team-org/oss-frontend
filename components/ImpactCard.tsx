import React from 'react'

export default function ImpactCard({id, image, name, spanDetails, details, content, spanName}) {
  return (
    <div className="mx-4 w-80 pr-2">
        <a 
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href="#">

        <div className="flex pt-4 px-6">
            <div className="block">
              <img 
                className="object-cover shadow-sm" 
                src={image} 
                alt=""
              />
            </div>
            <div className="pl-4 pb-4">
                <h2 className="font-semibold text-base">{name}</h2>
                <p className="text-xs">{spanDetails} - <span className="font-semibold">{details}</span></p>
            </div>
        </div>

        <div className="border-t-2 border-gray-100 mx-6 pt-4 pb-6">
            <p className="text-sm leading-6"><span className="font-bold text-primary-700">{spanName}</span> {content}</p>
        </div>
      </a>
    </div>
  )
}
