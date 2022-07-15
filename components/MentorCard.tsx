import Image from "next/future/image";
import Link from "next/link";
import React from "react";

export default function MentorCard({
  image,
  title,
  name,
  description,
  attributes,
}: {
  image: string;
  name: string;
  description: string;
  title: string;
  attributes: string;
}) {
  return (
    <div>
      <div className="mx-4 w-80 pr-2">
        <Link href={"MentorProfile/mentor_profile"}>
          <a
            className="block overflow-hidden rounded-lg border border-gray-100 shadow-sm"
            href="#"
          >
            <Image
              className="h-60 w-80 rounded-t-lg object-cover"
              src={image}
              alt="ivy"
              width={270}
              height={230}
            />
            <div className="px-6 pt-4">
              <p className="font-semibold">{name}</p>
              <p className="text-xs pt-1 text-gray-500">{description}</p>
              <div className="my-4 border-b-2 bg-gray-100"></div>
              <p className="text-sm font-normal">{title}</p>
              <p className="text-xs pt-1 pb-4 font-bold">{attributes}</p>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
}
