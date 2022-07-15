import React from "react";

function MentorStats() {
  return (
    <div>
      <div className="mx-6 border border-red-500 md:my-48 ">
        <h3 className="flex items-center text-2xl font-bold md:text-5xl md:leading-tight">
          Mentoring is about the possibility of being the one who creates a
          spark in the brain that does.
        </h3>
        <div className="mt-8 flex justify-around md:justify-evenly">
          <div>
            <h5 className="text-2xl font-bold text-primary-600 md:text-5xl">
              120K+
            </h5>
            <p className="text-base font-bold text-gray-light md:pt-4 md:text-xl">
              Mentees
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-bold text-primary-600 md:text-5xl">
              32K+
            </h5>
            <p className="font-bold text-gray-light md:pt-4 md:text-xl">
              Mentors
            </p>
          </div>
          <div>
            <h5 className="text-2xl font-bold text-primary-600 md:text-5xl">
              5.3M+
            </h5>
            <p className="font-bold text-gray-light md:pt-4 md:text-xl">
              Sessions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MentorStats;
