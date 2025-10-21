import { motion } from "framer-motion";
import Photo from "../images/me.jpg";
import { FaMapMarkerAlt, FaLinkedin } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { FaEye, FaEnvelope,FaPhoneSquareAlt } from "react-icons/fa";
import CodeRain from "../components/Stars";
import Tilt from 'react-parallax-tilt';
import { useState, useEffect } from "react";
import Dash from "../images/Dash.jpg";
import C from "../images/1st.png";
import MySQL from "../images/sql.png";
import Kave from "../images/pos.png";
import Cplus from "../images/C++.png";
import vb from "../images/download.png";
import js from "../images/javascript.png";
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
      icon: <FaEnvelope className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl p-2" />,
      title: "Email",
      info: "johnvincentkhu1@gmail.com",
    },
    {
      icon: <FaPhoneSquareAlt className="text-white text-6xl sm:text-6xl md:text-6xl lg:text-8xl p-2" />,
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
        className="w-full flex flex-col items-center m-4 font-poppins"
      >
        <h2 className="text-5xl font-semibold text-white pb-5">
          Projects & Contributions
        </h2>

        <div className="w-full flex flex-wrap md:flex-col lg:flex-nowrap justify-between gap-6 p-2">
          {[
            {
              image: Kave,
              title: "Kave Pharmacy",
              desc: "Contributed to the development of a full-stack pharmacy POS system built with the MERN stack, focusing on implementing core features such as inventory tracking, user management, and responsive layouts for efficient operations.",
              stack: [
                "MongoDB",
                "Express",
                "React",
                "Node.js",
                "Sqlite",
                "TailwindCSS",
              ],
              link: "https://kavepharmacy.netlify.app/",
            },
            {
              image: Dash,
              title: "Vehicle Gatepass/Parking System",
              desc: "A thesis project developed at Notre Dame of Dadiangas University, General Santos City. a real-time vehicle gate pass system that integrates RFID and Automatic License Plate Recognition (ALPR) and with WebSocket technology for real-time data updates.",
              stack: ["C#", "MySQL", "Websocket"],
              link: "https://github.com/Januhk/Vehicle-Gatepass-System",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="w-full md:w-[65%] md:mx-auto"
            >
              <div className="relative w-full aspect-[20/9] overflow-hidden rounded-xl shadow-lg group border border-white">
                <a
                  href={proj.link}
                  target="_blank"
                  className="bg-gray-200 font-poppins font-semibold absolute top-2  right-3 z-20 px-1 py-1 md:px-6 md:py-2 rounded-xl "
                  title="Preview"
                >
                 Preview
                </a>
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black/70 translate-y-full group-hover:translate-y-0 transition-transform duration-500 p-3 ">
                  <h2 className="text-3xl font-semibold text-white">
                    {proj.title}
                  </h2>
                  <p className="text-white text-[15px] md:text-[14px] p-2  mb-2">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.stack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-white/20 text-white text-xs font-semibold px-3  rounded-full border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
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

      <motion.section
        id="Contacts"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-full flex flex-col items-center justify-center p-4 overflow-hidden  rounded-2xl"
      >
        <h3 className="text-6xl font-semibold text-white pb-2 text-center text-nowrap ">
          Contact Me
        </h3>
        <p className="text-3x1 md:text-sm lg:text-xl text-center lg:text-left  text-gray-500">
          Whether you have a question, a project idea, or just want to connect,
          I’d be happy to hear from you
        </p>
        <div className="w-full  flex flex-col md:flex-row lg:flex-row items-center justify-center gap-x-6 gap-y-4 p-5 m-5">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="w-full lg:w-1/3 bg-transparent rounded-2xl text-center flex flex-col items-center justify-center border border-white hover:shadow-lg shadow-white transition-all duration-300"
            >
              {contact.icon}
              <span className="font-semibold font-poppins text-sm p-2 text-white">
                {contact.title}
              </span>
              <span className="font-semibold font-poppins text-sm p-2 text-white">
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
