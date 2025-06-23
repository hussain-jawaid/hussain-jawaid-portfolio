import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();

    await emailjs
      .sendForm(
        "service_2b8pybq",
        "template_tseamre",
        form.current,
        "lhYe4UT29j6MrGoGw",
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message.");
        },
      );

    setUserName("");
    setUserEmail("");
    setSubject("");
    setMessage("");
    form.current.reset();
  };

  return (
    <section className="flex w-full flex-col px-6 py-14 text-white sm:py-16 md:flex-row md:px-20 lg:px-28">
      {/* Left Section */}
      <div className="mb-10 flex w-full flex-col justify-between md:mb-0 md:w-[45%]">
        <div>
          <h1 className="bebas text-5xl text-white md:text-[76px]">
            LET'S CONNECT
          </h1>
          <p className="mt-4 text-sm font-light text-[#C7C7C7]">
            Say hello at{" "}
            <a
              href="mailto:hussainjawaid.work@gmail.com"
              className="border-b border-[#D3E97A] pb-[.1rem] text-white"
            >
              hussainjawaid.work@gmail.com
            </a>
          </p>
          <p className="text-sm font-light mt-2 text-[#C7C7C7]">
            For more info, here's my{" "}
            <a
              href="/resume.pdf"
              className="border-b border-[#D3E97A] text-white"
              target="_blank"
            >
              resume
            </a>
          </p>
          {/* Social Icons */}
          <div className="mt-6 flex items-center gap-6 text-2xl text-[#D3E97A]">
            <a
              href="https://www.linkedin.com/in/hussainjawaid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/hussain-jawaid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/HussainHhashmi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
        <p className="mt-10 text-sm text-[#C7C7C7] md:mt-0">
          © 2025 Hussain Jawaid
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="w-full md:w-[55%]">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="text-sm font-light text-[#C7C7C7]">Name</label>
            <input
              type="text"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="rounded-md border-none bg-[#1A1A1A] px-4 py-3 font-light text-white outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-light text-[#C7C7C7]">Email</label>
            <input
              type="email"
              name="user_email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="rounded-md border-none bg-[#1A1A1A] px-4 py-3 font-light text-white outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-light text-[#C7C7C7]">Subject</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="rounded-md border-none bg-[#1A1A1A] px-4 py-3 font-light text-white outline-none"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-light text-[#C7C7C7]">Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="h-32 rounded-md border-none bg-[#1A1A1A] px-4 py-3 font-light text-white outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-fit rounded-full bg-[#D3E97A] px-8 py-3 text-sm font-semibold text-black"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
