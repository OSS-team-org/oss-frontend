import React from 'react'

export default function MentorCard({id, image, title, name, description, attributes}) {
  return (
    <div className="mx-4 w-80 pr-2">
      <a 
        className="block overflow-hidden border border-gray-100 rounded-lg shadow-sm"
        href="#">
        <img
            className="object-cover w-80 h-60 rounded-t-lg"
            src={image}
            alt="ivy"
        />

          <div className="pt-4 px-6">
            <p className="font-semibold">{name}</p>

            <p className="text-xs pt-1 text-gray-500">{description}</p>

            <div className="border-b-2 my-4 bg-gray-100"></div>

            <p className="text-sm font-normal">{title}</p>

            <p className="text-xs font-bold pt-1 pb-4">{attributes}</p>

          </div>
      </a>
    </div>
  )
}
