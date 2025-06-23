function Skills() {
  const skills = [
    "python",
    "javascript",
    "ReactJS",
    "html",
    "FastAPI",
    "Tailwind",
    "css",
    "Pandas",
    "Matplotlib/seaborn",
    "MySQL",
    "Streamlit",
    "NumPy",
    "SQL",
    "Git",
    "GitHub",
  ];
  return (
    <section className="flex w-full flex-col justify-between border-b border-[#484848] px-6 py-14 sm:py-16 md:flex-row md:px-[80px] lg:px-[110px]">
      <div className="w-full md:w-[45%]">
        <h1 className="bebas text-5xl text-white md:text-[76px]">
          MY CAPABILITIES
        </h1>
      </div>

      {/* Skills Content */}
      <div className="flex w-full flex-col gap-10 pt-4 md:w-[55%] md:pt-0">
        <p className="font-light text-[#C7C7C7]">
          I'm constantly exploring new technologies and expanding my skill set
          to become a better developer, one step at a time.
        </p>
        <div className="bages flex flex-wrap items-center gap-5">
          {skills.map((item, index) => (
            <span
              key={index}
              className="rounded-full border border-[#484848] px-11 py-4 text-white"
            >
              {item.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
