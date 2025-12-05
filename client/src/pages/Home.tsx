/**
 * Portfolio Home Page
 * Design: Modern Minimalist with Technical Precision
 * - Asymmetric layout with generous whitespace
 * - IBM Plex Mono for headings, Inter for body
 * - Teal accent color (#00d4ff) for interactive elements
 * - Subtle hover effects and scroll animations
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useTheme } from "@/contexts/ThemeContext";
import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <a
            href="#home"
            className="text-lg font-bold text-foreground hover:text-accent transition-colors cursor-pointer"
          >
            Hussain Jawaid
          </a>
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <a
                href="#about"
                className="text-sm hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-sm hover:text-accent transition-colors"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-sm hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="text-sm hover:text-accent transition-colors"
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-sm hover:text-accent transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="hover:bg-accent"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden hover:bg-accent"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px]">
                <SheetHeader>
                  <SheetTitle>Hussain Jawaid</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-4 mt-6 pl-4">
                  <a
                    href="#home"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    Home
                  </a>
                  <a
                    href="#about"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    About
                  </a>
                  <a
                    href="#skills"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    Projects
                  </a>
                  <a
                    href="#experience"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    Experience
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base hover:text-accent transition-colors py-2"
                  >
                    Contact
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="container py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Full-Stack Developer
            </h1>
            <p className="text-xl text-muted-foreground">
              Building intelligent solutions with Python, JavaScript, and modern
              web technologies.
            </p>
          </div>
          <p className="text-lg text-muted-foreground">
            Currently pursuing DAE in Computer Information Technology at Mono
            Technical Institute, where I'm building skills in Computer Science
            and Engineering.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/hussain-jawaid"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Profile
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="/Hussain-Jawaid-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Resume
              </a>
            </Button>
          </div>
        </div>

        {/* Decorative Geometric Shape */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-lg transform rotate-45"></div>
            <div className="absolute inset-8 border-2 border-accent/30 rounded-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm Hussain Jawaid, an aspiring AI Engineer with a strong foundation
            in programming, problem-solving, and applied machine learning.
          </p>
          <p className="text-lg text-muted-foreground">
            My journey began at 16 when I started teaching myself to code and
            explored web development, graphic design, video editing, and data
            analysis. These experiences gave me a broad technical base and
            helped shape my creative approach to solving problems.
          </p>
          <p className="text-lg text-muted-foreground">
            I developed a deep interest in AI after taking Andrew Ng’s AI for
            Everyone course, which led me to build projects like McCarthy.ai, a
            ChatGPT-inspired system that introduced me to conversational AI and
            API-driven development.
          </p>
          <p className="text-lg text-muted-foreground">
            Today, I'm focused on Machine Learning, Deep Learning, and
            Generative AI, consistently learning and working on projects that
            strengthen my technical abilities. I enjoy engaging with the AI
            community and exploring ideas that contribute to the future of
            intelligent systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Fast Learner
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Collaborative Teammate
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Systems Thinker
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Problem Solver & Critical Thinker
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Logic & Reasoning
            </span>
            <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm">
              Adaptable & Flexible
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Skills Section */}
      <section id="skills" className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Languages */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4 text-accent">Languages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Python</li>
              <li>• JavaScript</li>
              <li>• SQL</li>
              <li>• HTML</li>
              <li>• CSS</li>
            </ul>
          </Card>

          {/* Technologies */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4 text-accent">Technologies</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• FastAPI</li>
              <li>• ReactJS</li>
              <li>• MySQL</li>
              <li>• Pandas</li>
              <li>• Tailwind CSS</li>
            </ul>
          </Card>

          {/* Tools */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-bold mb-4 text-accent">
              Tools & Platforms
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Git/GitHub</li>
              <li>• VS Code</li>
              <li>• Cursor</li>
              <li>• PyCharm</li>
              <li>• Jupiter Notebook</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        <div className="space-y-8">
          {/* Project 1 */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">McCarthy.ai</h3>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <a
                href="https://github.com/hussain-jawaid/chatbot"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent/80 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-accent" />
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              AI-powered chatbot inspired by ChatGPT. Users can create accounts,
              start conversations, and access saved chat history through an
              intuitive sidebar interface with real-time database
              synchronization.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Python
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                ReactJS
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                MySQL
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Groq API
              </span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/hussain-jawaid/chatbot"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </Button>
          </Card>

          {/* Project 2 */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Medical Data Extraction
                </h3>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <a
                href="https://github.com/hussain-jawaid/medical-data-extraction"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent/80 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-accent" />
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              Lightweight tool for extracting key information from medical PDFs
              (prescriptions, patient records). Converts PDFs to enhanced images
              for accurate OCR-based text extraction using regex patterns.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Python
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Streamlit
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                OpenCV
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Pytest
              </span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/hussain-jawaid/medical-data-extraction"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </Button>
          </Card>

          {/* Project 3 */}
          <Card className="p-8 hover:shadow-lg transition-shadow border-l-4 border-l-accent">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Expense Management System
                </h3>
                <p className="text-sm text-muted-foreground">2025</p>
              </div>
              <a
                href="https://github.com/hussain-jawaid/expense-management-system"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent/80 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-5 h-5 text-accent" />
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              Full-stack expense tracking application with category-based
              organization and instant monthly/category analysis. Features
              organized frontend, backend, and test folders with MySQL database
              integration.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Python
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                FastAPI
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Streamlit
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                MySQL
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded">
                Pytest
              </span>
            </div>
            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/hussain-jawaid/expense-management-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Repository
              </a>
            </Button>
          </Card>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Work Experience</h2>
        <Card className="p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold">Social Worker</h3>
              <p className="text-accent font-semibold">
                Foundation Fighting Poverty
              </p>
            </div>
            <span className="text-sm text-muted-foreground">
              Jul 2025 - Aug 2025
            </span>
          </div>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Assisted in raising donations through the FFP Information System
                (FIS) to support beneficiaries needing housing, education, and
                medical help
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Researched and documented potential CSR and government grant
                opportunities for FFP's future projects
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Supported social media engagement by promoting FFP campaigns and
                writing blog content to highlight success stories
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Conducted educational analysis on the public school system,
                identifying challenges and providing recommendations
              </span>
            </li>
          </ul>
        </Card>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Education Section */}
      <section className="container py-24">
        <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>
        <div className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold mb-2">
              DAE in Computer Information Technology
            </h3>
            <p className="text-accent font-semibold mb-2">
              Mono Technical Institute, Karachi
            </p>
            <p className="text-sm text-muted-foreground mb-3">2024 - Present</p>
            <p className="text-sm text-muted-foreground">
              Relevant Coursework: Applied Physics, Applied Chemistry, Applied
              Mathematics, Computer Application Software, Introduction to
              Computer Programming, Object-Oriented Programming
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Python: Beginner to Advanced
              </h3>
              <p className="text-sm text-muted-foreground">
                For Data Professionals
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-bold mb-2">
                Internship Completion Certificate
              </h3>
              <p className="text-sm text-muted-foreground">
                Foundation Fighting Poverty
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container">
        <div className="h-px bg-border"></div>
      </div>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <a
                href="mailto:hussainjawaid.work@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/hussain-jawaid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://linkedin.com/in/hussainjawaid"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Hussain Jawaid. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
