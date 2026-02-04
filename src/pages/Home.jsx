import { motion } from "framer-motion";
import Photo from "../images/me.jpg";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaEye, FaEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
import CodeRain from "../components/Stars";
import Tilt from "react-parallax-tilt";
import { useState, useEffect } from "react";
import Dash from "../images/Dash.jpg";
import C from "../images/1st.png";
import MySQL from "../images/sql.png";
import Kave from "../images/pos.png";
import Cplus from "../images/C++.png";
import vb from "../images/download.png";
import js from "../images/JavaScript.png";
import node from "../images/Node.js.png";
import ex from "../images/Express.png";
import tail from "../images/Tailwind CSS.png";
import Git from "../images/Git.png";
import react from "../images/React.png";
import Slack from "../images/Slack.png";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const Home = () => {
  const contacts = [
    {
      icon: (
        <FaEnvelope className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl p-2" />
      ),
      title: "Email",
      info: "johnvincentkhu1@gmail.com",
    },
    {
      icon: (
        <FaPhoneSquareAlt className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl p-2" />
      ),
      title: "Phone",
      info: "+63 9691137273",
    },
  ];
  const cards = [
    { id: 1, title: "C#", image: C },
    { id: 2, title: "C++", image: Cplus },
    { id: 3, title: "Visual Basic", image: vb },
    { id: 4, title: "Javascript", image: js },
    { id: 5, title: "NodeJs", image: node },
    { id: 6, title: "ReactJS", image: react },
    { id: 7, title: "Express", image: ex },
    { id: 8, title: "MySql", image: MySQL },
    { id: 10, title: "TailWindCSS", image: tail },
    { id: 11, title: "Git", image: Git },
    { id: 12, title: "Slack", image: Slack },
  ];
  const [scrollDistance, setScrollDistance] = useState(0);
  const [scrollDuration, setScrollDuration] = useState(20);
  let containerRef = null;
  let contentRef = null;

  useEffect(() => {
    const calculateScroll = () => {
      if (contentRef && containerRef) {
        const containerWidth = containerRef.offsetWidth;
        const contentWidth = contentRef.scrollWidth / 2;
        const distance = contentWidth - containerWidth;
        setScrollDistance(-distance);

        const speed = 100;
        const duration = distance / speed;
        setScrollDuration(duration);
      }
    };

    calculateScroll();
    window.addEventListener("resize", calculateScroll);
    return () => window.removeEventListener("resize", calculateScroll);
  }, [cards]);

  return (
    <div className="relative flex flex-col w-full items-center justify-center p-4 overflow-hidden min-h-screen ">
      {/* ABOUT SECTION */}
      <CodeRain />
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-6xl p-6 m-6 flex flex-col lg:flex-row items-center justify-center gap-6"
      >
        {/* Photo */}
        <motion.div
          className="w-full md:w-3/4 lg:w-1/2 flex justify-center lg:justify-end"
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        >
          <Tilt glareEnable={true} glareColor="white" glareMaxOpacity={0.2}>
            <img
              src={Photo}
              alt="My Photo"
              className="max-w-full h-[40vh] md:h-[55vh] lg:h-[75vh] border border-white  object-contain shadow-lg"
            />
          </Tilt>
        </motion.div>

        {/* Info */}
        <div className="w-full md:w-3/4 lg:w-1/2 p-2 flex flex-col items-center lg:items-start text-white gap-4 font-poppins">
          <motion.p
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
          >
            John Vincent Khu
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-3x1 md:text-sm lg:text-2xl text-center lg:text-left"
          >
            FullStack Web & Desktop Developer
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-xl lg:text-2xl text-red-500" />
            <p className="text-sm lg:text-lg text-gray-200">
              General Santos City, Philippines
            </p>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={staggerContainer}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2"
          >
            {[
              { icon: <SiGithub />, link: "https://github.com/Januhk" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/john-vincent-khu-b51712222/",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
                }}
                className="px-4 py-3 bg-transparent border border-white text-white rounded-lg transition"
              >
                <div className="text-3xl">{social.icon}</div>
              </motion.a>
            ))}
          </motion.div>
          {/* butngi rag framer motion for toms  */}
          <motion.div variants={staggerContainer}>
            <motion.a
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px rgba(255,255,255,0.3)",
              }}
              className="mt-3 bg-transparent transition border rounded-lg hover:shadow hover:shadow-white border-white px-3 py-4 flex items-center gap-2 font-semibold"
              onClick={() => window.open("/Files/Resume.pdf", "_blank")}
            >
              <FaEye className="text-xl" />
              Preview CV
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        id="Experience"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center m-4 p-2 font-poppins"
      >
        <h2 className="text-6xl font-semibold text-white pb-5">
          My Experience
        </h2>

        <div className="w-full max-w-3xl text-white flex flex-col p-5 rounded-2xl border border-gray-500 relative gap-y-2">
          {[
            {
              title: "Freelance Software Developer",
              subtitle:
                "Freelance C#, VB WinForms Developer – College Projects",
              date: "October 2020 - March 2022",
              bullets: [
                "Built desktop applications including POS and management systems using C#/VB WinForms.",
                "Designed UI and integrated MySQL/SQLServer/Access databases.",
                "Improved problem-solving and collaboration with clients.",
              ],
            },
            {
              title: "HackForGov 2024 Capture-The-Flag Competition",
              subtitle: "Cybersecurity Hackathon Participant",
              date: "August 2, 2024",
              bullets: [
                "Solved real-world security challenges in a national hackathon.",
                "Applied analytical skills to identify vulnerabilities.",
                "Learned best cybersecurity practices under time pressure.",
              ],
            },
            {
              title: "Kave Guild: Your Web3 Ally",
              subtitle: "Full-Stack Web Developer",
              date: "January 2025 – May 2025",
              bullets: [
                "Contributed to a production ready POS with inventory tracking system .",
                "Built responsive, accessible layouts and Supported ongoing development using MERN stack technologies..",
                "Collaborated in a 4-member Agile team using Slack.",
              ],
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="relative pl-6 pb-4"
            >
              <span className="absolute left-0 top-3 w-4 h-4 rounded-full bg-white border-2 border-gray-600 z-10" />
              {index < 2 && (
                <span className="absolute left-[7px] top-5 bottom-0 w-px h-full bg-gray-600 z-10 " />
              )}
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <h3 className="text-lg text-gray-300">{exp.subtitle}</h3>
              <h4 className="text-sm text-gray-400">{exp.date}</h4>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-base">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        id="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center py-16 font-poppins "
      >
        {/* Section Title */}
        <h2 className="text-5xl font-bold text-white pb-10 text-center">
          Projects & Contributions
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-4 md:px-16">
          {[
            {
              image: Kave,
              title: "Kave Pharmacy",
              desc: "Contributed to a full-stack pharmacy POS system (MERN), focusing on inventory tracking, user management, and responsive layouts for Kave Guilds Pharmacy",
              stack: [
                "MongoDB",
                "Express",
                "React",
                "Node.js",
                "SQLite",
                "TailwindCSS",
              ],
              link: "https://kavepharmacy.netlify.app/",
            },
            {
              image: Dash,
              title: "Vehicle Gatepass/Parking System",
              desc: "Developed a real-time vehicle gate pass management system that uses RFID and ALPR to automatically identify vehicles and grant access, with WebSocket enabling instant updates for security personnel and administrators.",
              stack: ["C#", "MySQL", "WebSocket"],
              link: "https://github.com/Januhk/Vehicle-Gatepass-System",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700 flex flex-col"
            >
              {/* Image */}
              <div className="relative w-full h-64 md:h-48 lg:h-56 overflow-hidden group">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-black text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-white hover:text-black transition"
                >
                  Preview
                </a>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base">
                    {proj.desc}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {proj.stack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* TECH STACKS SECTION */}
      <motion.section
        id="Tech"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center pb-4 mb-5 overflow-hidden"
      >
        <div
          ref={(el) => (containerRef = el)}
          className="relative w-full max-w-7xl overflow-hidden rounded-xl"
        >
          <motion.div
            ref={(el) => (contentRef = el)}
            className="flex gap-6"
            animate={{ x: [0, scrollDistance] }}
            transition={{
              ease: "linear",
              duration: scrollDuration,
              repeat: Infinity,
            }}
          >
            {[...cards, ...cards].map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="min-w-[150px] bg-transparent  rounded-lg flex flex-col items-center justify-center p-4 transition duration-300 ease-in-out"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className={`w-16 h-16 object-contain mb-2 transition duration-300 ${
                    card.title === "Express"
                      ? "invert sepia saturate-500 hue-rotate-80 brightness-125"
                      : ""
                  }`}
                />
                <span className="text-sm lg:text-base font-roboto font-semibold text-center text-white">
                  {card.title}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
{/* Contact SECTION */}
      <motion.section
        id="Contacts"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full max-w-5xl mx-auto p-8 bg-black text-white rounded-2xl flex flex-col items-center"
      >
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-3">
          Contact Me
        </h3>

        <p className="text-gray-300 text-center max-w-2xl mb-10">
          Whether you have a question, a project idea, or just want to connect,
          I’d be happy to hear from you.
        </p>

      
        <div className="w-full flex flex-col md:flex-row gap-6 justify-center">
          {contacts.map((contact, idx) => (
            <div
              key={idx}
              className="flex-1 bg-black border border-white rounded-2xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{contact.icon}</div>

              {/* Title */}
              <span className="font-semibold text-white mb-2">
                {contact.title}
              </span>

              {/* Info */}
              <span className="text-gray-300 text-lg break-words">
                {contact.info}
              </span>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
