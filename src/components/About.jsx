import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 84; // Approximate navigation height
      const elementPosition = element.offsetTop - navHeight;
      console.log(element.offsetTop);

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="flex w-full flex-col justify-between border-b border-[#484848] px-6 py-14 sm:py-16 md:flex-row md:px-[80px] lg:px-[110px]">
        <div className="w-full md:w-[45%]">
          <h1 className="bebas text-5xl text-white md:text-[106px]">ABOUT ME</h1>
        </div>

        {/* About ME Data */}
        <div className="flex w-full flex-col gap-8 pt-4 md:w-[55%] md:pt-0">
          {/* Content */}
          <div className="flex flex-col gap-4">
            <p className="text-[1.1rem] font-light text-[#C7C7C7] md:text-xl">
              I'm Hussain Jawaid — a self-taught developer based in Karachi with
              a passion for building clean, functional, and user-centered
              technology. I've worked hands-on with tools like FastAPI, React,
              MySQL, and Streamlit to create full-stack applications that solve
              real-world problems. Through a technical internship and multiple
              personal projects, I've gained experience in data processing,
              automation, and backend development — always with a focus on
              writing clear, purposeful code. Guided by faith and a deep desire
              to grow, I see programming not just as a skill, but as a way to
              build meaningful solutions that serve others and improve with
              time.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="group flex h-11 w-fit items-center gap-2 rounded-full bg-[#D3E97A] px-5 text-sm font-semibold text-black sm:h-14 sm:text-base md:h-12"
            >
              CONTACT ME
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:h-9 group-hover:w-9 md:h-[12px] md:w-[12px]">
                <span className="text-[1.2rem] opacity-100 transition-all duration-300 md:text-[.1rem] md:opacity-0 md:group-hover:text-[1.5rem] md:group-hover:opacity-100">
                  <GoArrowUpRight />
                </span>
              </span>
            </button>

            <a
              href="https://www.linkedin.com/in/hussainjawaid/"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222222] text-lg text-[#D3E97A] transition-all duration-300 hover:border-[#D3E97A] hover:bg-[#1a1a1a] sm:h-12 sm:w-12 sm:text-xl md:border md:border-transparent md:hover:scale-110 md:hover:bg-[transparent]"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hussain-jawaid/"
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#222222] text-lg text-[#D3E97A] transition-all duration-300 hover:border-[#D3E97A] hover:bg-[#1a1a1a] sm:h-12 sm:w-12 sm:text-xl md:border md:border-transparent md:hover:scale-110 md:hover:bg-[transparent]"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
