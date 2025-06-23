import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      role: "python intern",
      duration: "feb 2025 — mar 2025",
      company: { isAvailable: true, name: "CodeAlpha" },
      desc: `During a month-long virtual internship at CodeAlpha, I worked as a Python Developer, where I built hands-on projects using core Python concepts like file handling and object-oriented programming. The internship sharpened my problem-solving and debugging skills through self-guided tasks and code reviews. This experience helped me build consistency, deepen my understanding of backend development, and grow as an independent learner and developer.`,
    },
  ];

  return (
    <section className="flex w-full flex-col border-b border-[#484848] px-6 py-14 sm:py-16 md:flex-row md:px-[80px] lg:px-[110px]">
      {/* Left — Heading */}
      <div className="mb-10 w-full md:mb-0 md:w-[45%]">
        <h1 className="bebas text-5xl text-white md:text-[76px]">
          MY EXPERIENCE
        </h1>
      </div>

      {/* Right — Experience Cards */}
      <div className="w-full md:w-[55%]">
        <div className="flex flex-col gap-14">
          {experiences.map((item) => (
            <ExperienceCard key={item.role} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
