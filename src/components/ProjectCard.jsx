import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ data }) {
  return (
    <div className="card flex flex-col justify-between gap-6 pt-4 md:flex-row">
      {/* Left — Project Image */}
      <div className="flex aspect-square w-full items-center justify-center rounded-2xl bg-[#1a1a1a] transition-all duration-300 md:w-[48.5%] md:hover:-translate-y-3 md:hover:bg-[#2b2b2b]">
        <div className="h-full w-full overflow-hidden rounded-2xl border-black md:h-[320px] md:w-[450px] md:border-2">
          <img
            src={data.imgPath}
            alt={data.heading}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Right — Project Info */}
      <div className="flex aspect-square w-full flex-col justify-center gap-4 md:w-[48.5%]">
        {/* Title & Description */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-white md:text-4xl">{data.heading}</h1>
          <p className="text-sm font-light leading-5 text-[#C7C7C7]">
            {data.desc}
          </p>
        </div>

        {/* Divider & Meta Info */}
        <div>
          <div className="border-b border-[#484848] pb-3 pt-5">
            <h4 className="font-light text-white">PROJECT INFO</h4>
          </div>

          <div className="flex items-center justify-between border-b border-[#484848] pb-3 pt-5 text-sm">
            <h5 className="font-light text-white">Year</h5>
            <h5 className="font-light text-[#C7C7C7]">{data.year}</h5>
          </div>

          <div className="flex items-center justify-between border-b border-[#484848] pb-3 pt-5 text-sm">
            <h5 className="font-light text-white">Role</h5>
            <h5 className="font-light text-[#C7C7C7]">{data.role}</h5>
          </div>

          <div className="flex items-center justify-between border-b border-[#484848] pb-3 pt-5 text-sm">
            <h5 className="font-light text-white">Tech Stack</h5>
            <h5 className="font-light text-[#C7C7C7]">{data.tech}</h5>
          </div>
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap items-center gap-6 pt-4 font-medium text-[#D3E97A]">
          {data.demo.isAvailable && (
            <a
              href={data.demo.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 font-light transition hover:opacity-80"
            >
              LIVE DEMO
              <GoArrowUpRight size="1.2rem" />
            </a>
          )}

          <a
            href={data.githubURL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border-b border-[#D3E97A] pb-1 font-light transition hover:opacity-80"
          >
            SEE ON GITHUB
            <FaGithub size="1.2rem" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
