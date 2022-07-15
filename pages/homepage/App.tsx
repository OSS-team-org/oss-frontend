import React from "react";
import Banner from "../../components/homepage/Banner";
import MentorCard from "../../components/homepage/MentorCard";
import MentorCardData from "../../Data/mentorCardData";
import ImpactCard from "../../components/homepage/ImpactCard";
import ImpactCardData from "../../Data/impactCardData";
import MentorStats from "../../components/homepage/MentorStats";
import GrowthBanner from "../../components/homepage/GrowthBanner";
import Header from "../../components/homepage/Header";
import Footer from "../../components/homepage/Footer";

function App() {
  const mentorCards = MentorCardData.map((mentorCard) => (
    <MentorCard
      key={mentorCard.id}
      image={mentorCard.image}
      name={mentorCard.name}
      description={mentorCard.description}
      title={mentorCard.title}
      attributes={mentorCard.attributes}
    />
  ));

  const impactCards = ImpactCardData.map((impactCard) => (
    <ImpactCard
      key={impactCard.id}
      image={impactCard.image}
      name={impactCard.name}
      spanDetails={impactCard.spanDetails}
      details={impactCard.details}
      content={impactCard.content}
      spanName={impactCard.spanName}
    />
  ));

  return (
    <div>
      <Header />
      <main className="mx-auto mb-24 max-w-5xl">
        {/**Banner */}
        <Banner />

        {/**Mentoring Stats */}
        <MentorStats />

        {/** Mentors */}
        <div>
          <div className="mx-6">
            <h5 className="md:text-3xl mt-24 text-2xl font-bold">Mentors</h5>
            <p className="pt-2 md:text-base">
              World class professionals creating the spark in the lives of
              mentees.
            </p>
          </div>
          <div className="my-8 flex snap-mandatory grid-cols-3 gap-6 sm:snap-x sm:overflow-scroll md:grid">
            {mentorCards}
          </div>
        </div>

        {/**Become a Mentor */}
        <div className="mb-4 flex flex-col items-center justify-center px-6">
          <p className="text-xs text-center font-semibold text-gray-deep">
            Join 32K+ mentors creating sparks in lives of mentees.
          </p>
          <div className="my-8 mx-auto flex flex-wrap justify-center gap-4">
            <a
              className="text-sm block w-full cursor-pointer rounded-lg bg-primary-700 px-12 py-3 font-bold text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700 sm:w-auto"
              href="#"
            >
              Become a Mentor
            </a>
          </div>
        </div>

        {/**Impacts on Mentees */}
        <div className="mt-24 px-6">
          <h5 className="pb-1 text-2xl font-semibold">Impacts on Mentees</h5>
          <p className="text-base font-normal">
            World class professionals creating the spark in the lives of
            mentees.
          </p>
        </div>

        <div className="flex snap-x snap-mandatory grid-cols-3 gap-6 pt-8 pb-12 sm:overflow-scroll md:grid">
          {impactCards}
        </div>

        {/* Find a mentor */}
        <div className="mb-4 flex flex-col items-center justify-center px-6">
          <p className="text-xs text-center font-semibold text-gray-deep">
            Experience the impact from our 32K+ world class mentors
          </p>
          <div className="my-8 mx-auto flex flex-wrap justify-center gap-4">
            <a
              className="text-sm block w-full cursor-pointer rounded-lg bg-primary-700 px-12 py-3 font-bold text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700 sm:w-auto"
              href="#"
            >
              Find a Mentor
            </a>
          </div>
        </div>

        {/* Growth */}
        <GrowthBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
