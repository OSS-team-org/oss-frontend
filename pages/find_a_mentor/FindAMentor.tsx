import React from "react";
import Banner from "../../components/find_a_mentor/Banner";
import Footer from "../../components/homepage/Footer";
import Header from "../../components/homepage/Header";
import FindAMentorCard from "../../components/find_a_mentor/FindAMentorCard";
import FindAMentorCardData from "../../Data/findAMentorCardData";

function FindAMentor() {
  const mentorCards = FindAMentorCardData.map((mentorCard) => (
    <FindAMentorCard
      key={mentorCard.id}
      image={mentorCard.image}
      name={mentorCard.name} 
      description={mentorCard.description}
      title={mentorCard.title}
      attributes={mentorCard.attributes}
    />
  ));

  return (
    <main>
      <Header />
      <Banner />
      <section className="mx-auto mb-24 max-w-5xl">
        <div className="my-8 mx-auto flex flex-col items-center justify-center space-y-12 md:grid md:grid-cols-3 md:gap-x-4 md:gap-y-12 md:space-y-0 ">
          {mentorCards}
        </div>
        <button className="text-sm mx-auto block w-3/4 cursor-pointer rounded-lg bg-primary-700 px-12 py-3 font-bold text-white shadow hover:bg-primary-600 focus:outline-none focus:ring active:bg-primary-700 sm:w-auto md:mx-auto">
          Show more mentors
        </button>
      </section>
      <Footer />
    </main>
  );
}

export default FindAMentor;
