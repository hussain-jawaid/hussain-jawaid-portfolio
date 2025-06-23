import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      imgPath: "/projects/docs-app.png",
      heading: "Docs App",
      desc: `Docs App is a modern, responsive document organizer built with ReactJS, Framer Motion, and Tailwind CSS. The interface features draggable cards that simulate a clean and interactive workspace, allowing users to visually organize their documents. Smooth animations powered by Framer Motion enhance the user experience, while the layout remains responsive across all screen sizes. The project showcases my frontend development skills, particularly in creating dynamic UIs with clean design and seamless interactivity.`,
      year: "Jun 2025",
      role: "Front-end Developer",
      githubURL: "https://github.com/hussain-jawaid/docs-app",
      demo: { isAvailable: true, link: "https://docs-app-six.vercel.app/" },
    },
    {
      imgPath: "/projects/expense-tracking-system.png",
      heading: "Expense Tracking System",
      desc: `I built a full-stack expense tracking application that allows users to efficiently add, update, and manage their expenses. The backend was developed using FastAPI, with MySQL handling data storage, while the frontend was designed using Streamlit to ensure a smooth and user-friendly experience. The application also includes detailed visual analysis, providing users with category-wise and month-wise summaries of their expenses through interactive charts.`,
      year: "May 2025",
      role: "Backend Developer",
      githubURL: "https://github.com/hussain-jawaid/expense-management-system",
      demo: { isAvailable: false, link: "" },
    },
    {
      imgPath: "/projects/medical-data-extraction.png",
      heading: "Medical Data Extraction",
      desc: `I built a backend system to automate document data extraction for AtliQ Insurance, helping them save over $50,000 annually. The solution used Python with PyTesseract, OpenCV, and Regular Expressions to extract key information from scanned medical prescriptions and patient documents. Image processing was handled through OpenCV, followed by OCR using PyTesseract for text conversion. Finally, important fields were parsed using Regex. The backend was served via FastAPI, and the interface was built using Streamlit for quick interaction and testing.`,
      year: "May 2025",
      role: "Backend Developer",
      githubURL: "https://github.com/hussain-jawaid/medical-data-extraction",
      demo: { isAvailable: false, link: "" },
    },
  ];

  return (
    <section className="w-full border-b border-[#484848] px-6 py-14 sm:py-16 md:px-[80px] lg:px-[110px]">
      {/* Section Header */}
      <div className="flex flex-col gap-2 md:max-w-[70%]">
        <h1 className="bebas text-5xl text-white md:text-[76px]">
          FEATURED PROJECTS
        </h1>
        <p className="text-sm font-light leading-5 text-[#C7C7C7] sm:text-base md:text-[1.05rem]">
          Here are some of the selected projects that showcase my passion for
          technology.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-14 flex flex-col gap-16">
        {projects.map((item) => (
          <ProjectCard key={item.heading} data={item} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
