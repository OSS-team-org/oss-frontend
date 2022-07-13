import Image from "next/image";
import React from "react";

export default function ImpactCard({
  id,
  image,
  name,
  spanDetails,
  details,
  content,
  spanName,
}) {
  return (
    <div className="mx-4 w-80 pr-2">
      <a
        className="block overflow-hidden rounded-lg border border-gray-100 shadow-sm"
        href="#"
      >
        <div className="flex px-6 pt-4">
          <div className="block">
            <Image className="object-cover shadow-sm" src={image} alt="" />
          </div>
          <div className="pl-4 pb-4">
            <h2 className="text-base font-semibold">{name}</h2>
            <p className="text-xs">
              {spanDetails} - <span className="font-semibold">{details}</span>
            </p>
          </div>
        </div>

        <div className="mx-6 border-t-2 border-gray-100 pt-4 pb-6">
          <p className="text-sm leading-6">
            <span className="font-bold text-primary-700">{spanName}</span>{" "}
            {content}
          </p>
        </div>
      </a>
    </div>
  );
}
