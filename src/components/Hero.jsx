import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Hero() {
  return (
    <div className="flex w-full flex-col gap-10 border-b border-[#484848] px-6 py-8 lg:flex-row lg:gap-0 lg:px-[110px] lg:pb-14 lg:pt-6">
      {/* Left — Text Content */}
      <div className="flex w-full flex-col justify-center gap-8 lg:w-1/2">
        <div>
          <h1 className="text-5xl leading-[1] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="bebas block">HI, I AM</span>
            <span className="bebas block">HUSSAIN JAWAID.</span>
          </h1>
          <p className="mt-3 text-sm font-light text-[#C7C7C7] sm:text-base md:pr-10 md:text-[1.1rem]">
            A Karachi based developer passionate about building accessible and
            user friendly tech.
          </p>
        </div>

        {/* Resume + Icons */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex h-11 w-fit items-center gap-2 rounded-full bg-[#D3E97A] px-5 text-sm font-semibold text-black sm:h-14 sm:text-base md:h-12"
          >
            DOWNLOAD RESUME
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:h-9 group-hover:w-9 md:h-[12px] md:w-[12px]">
              <span className="text-[1.2rem] opacity-100 transition-all duration-300 md:text-[.1rem] md:opacity-0 md:group-hover:text-[1.5rem] md:group-hover:opacity-100">
                <MdOutlineFileDownload />
              </span>
            </span>
          </a>

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

      {/* Right — Image (always after text) */}
      <div className="h-[400px] w-full overflow-hidden rounded-2xl sm:h-[500px] md:h-[550px] lg:w-1/2">
        <img
          src="/project-image.jpg"
          className="h-full w-full object-cover"
          alt="Hussain Jawaid"
        />
      </div>
    </div>
  );
}

export default Hero;
