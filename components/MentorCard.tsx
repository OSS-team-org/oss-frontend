import Image from "next/image";
import React from "react";

export default function MentorCard({
  id,
  image,
  title,
  name,
  description,
  attributes,
}) {
  return (
    <div className="mx-4 w-80 pr-2">
      <a
        className="block overflow-hidden rounded-lg border border-gray-100 shadow-sm"
        href="#"
      >
        <Image
          className="h-60 w-80 rounded-t-lg object-cover"
          src={image}
          alt="ivy"
        />

        <div className="px-6 pt-4">
          <p className="font-semibold">{name}</p>

          <p className="text-xs pt-1 text-gray-500">{description}</p>

          <div className="my-4 border-b-2 bg-gray-100"></div>

          <p className="text-sm font-normal">{title}</p>

          <p className="text-xs pt-1 pb-4 font-bold">{attributes}</p>
        </div>
      </a>
    </div>
  );
}
