import { useState, useEffect } from "react";
import { TbMenu } from "react-icons/tb";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 84; // Approximate navigation height
      const elementPosition = element.offsetTop - navHeight;
      console.log(element.offsetTop)

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // Close mobile menu after clicking
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "work", "about", "contact"];
      const navHeight = 80;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop - navHeight - 100;
          if (window.scrollY >= sectionTop) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section) => activeSection === section;

  return (
    <nav className="sticky top-0 z-50 w-full bg-black px-6 py-4 text-[#C7C7C7] md:px-[60px] md:py-[24px]">
      <div className="flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="bebas cursor-pointer text-2xl transition-colors hover:text-white md:text-3xl"
        >
          Hussain Jawaid
        </button>

        {/* Desktop Menu */}
        <div className="hidden gap-6 md:flex">
          <button
            onClick={() => scrollToSection("work")}
            className={`cursor-pointer transition-colors hover:text-white ${
              isActive("work") ? "font-semibold text-white" : ""
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`cursor-pointer transition-colors hover:text-white ${
              isActive("about") ? "font-semibold text-white" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer transition-colors hover:text-white ${
              isActive("contact") ? "font-semibold text-white" : ""
            }`}
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="text-4xl focus:outline-none md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <TbMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <button
            onClick={() => scrollToSection("work")}
            className={`cursor-pointer text-left transition-colors hover:text-white ${
              isActive("work") ? "font-semibold text-white" : ""
            }`}
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`cursor-pointer text-left transition-colors hover:text-white ${
              isActive("about") ? "font-semibold text-white" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`cursor-pointer text-left transition-colors hover:text-white ${
              isActive("contact") ? "font-semibold text-white" : ""
            }`}
          >
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
