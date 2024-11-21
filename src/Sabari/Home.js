import React, { useState, useRef, useEffect } from "react";
import "../Sabari/Portfolio.css";
import Sabari1 from "../../src/Sabari/Photo/Sabari1.jpg";
import Sabarilogo from "../Sabari/Photo/logo.png";
import react from "../../src/Sabari/Photo/react.jpg";
import restaurant from "../../src/Sabari/Photo/restaurant.jpg";
import w3school from "../../src/Sabari/Photo/w3school.jpg";
import zomato from "../../src/Sabari/Photo/zomato.PNG";
import calculater from "../../src/Sabari/Photo/calculater.PNG";
import apartment from "../../src/Sabari/Photo/apartment.PNG";
import Sabarinayagam_Resume from "../../src/Sabari/Photo/Sabarinayagam-Resume.pdf";
import Sabari_Resume from "../../src/Sabari/Photo/Sabari_Resume.pdf";

import Stack from "@mui/material/Stack";
import { IconButton } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LaunchIcon from "@mui/icons-material/Launch";
import Avatar from "@mui/material/Avatar";
import zIndex from "@mui/material/styles/zIndex";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleTouchOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleTouchOutside);
    document.addEventListener("mousedown", handleTouchOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("touchstart", handleTouchOutside);
      document.removeEventListener("mousedown", handleTouchOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const data = [
    { "Programming Languages": ["Java", "JavaScript"] },
    {
      "Web Technology": [
        "HTML5",
        "CSS3",
        "BootStrap5",
        "Material UI",
        "REST API",
        "Postman",
      ],
    },
    {
      Framework: [
        "React JS",
        "Redux",
        "Saga",
        "Formik",
        // "Yup",
        "React-Router-Dom",
        "NodeJS",
        "Express JS",
      ],
    },
    { DataBase: ["MySql"] },
    { IDE: ["VS Code", "Eclipse", "GitHub"] },
  ];

  return (
    <>
      {/* ..................Navbar................... */}
      <nav ref={navbarRef}>
        <div class="logo">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="logo"
              src={Sabarilogo}
              sx={{ width: 50, height: 45 }}
            />
            <a href="#" className="logoname">
              Sabari
            </a>
          </Stack>
        </div>
        <ul className={isOpen ? "showmenu" : ""}>
          <li>
            <a href="#">
              <button className="btn">Home</button>
            </a>
          </li>
          <li>
            <a href="#About">
              <button className="btn">About</button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button className="btn">Project</button>
            </a>
          </li>
          <li>
            <a href={Sabari_Resume} download="Sabari Resume.pdf">
              <button className="btn">Resume</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button className="btn">Contact</button>
            </a>
          </li>
        </ul>
        <div class="menu" onClick={toggleNavbar}>
          <div className={isOpen ? "linea" : "menu-line"}></div>
          <div className={isOpen ? "lineb" : "menu-line"}></div>
          <div className={isOpen ? "linec" : "menu-line"}></div>
        </div>
      </nav>
      <marquee className={isOpen ? "marq" : ""}>
        Certified Java Full Stack Developer | B.Tech. Graduate from SRM
        Institute of Science and Technology
      </marquee>

      {/* ..................Banner................... */}

      <div className="banner" id="banner">
        <div className="name">
          <div className="namecont">
            <p>Hello I'm</p>
            <h1>Sabari Nayagam</h1>
            <h2>Full Stack Developer</h2>
            <Stack spacing={2} direction="row">
              <a href={Sabari_Resume} download="Sabari Resume.pdf">
                {" "}
                <button className="btn">Resume </button>{" "}
              </a>
              <a href="#contact">
                <button className="btn">Contact</button>
              </a>
            </Stack>
          </div>
        </div>
        <div className="photo">
          <img src={Sabari1} alt="Sabarinayagam_Photo"></img>
        </div>
      </div>

      {/* ..................About................... */}

      <div className="wave" id="About">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,32L48,42.7C96,53,192,75,288,74.7C384,75,480,53,576,53.3C672,53,768,75,864,96C960,117,1056,139,1152,128C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="aboutbanner">
        <div className="aboutphoto">
          <img src={Sabarilogo} alt="Sabarinayagam_Photo"></img>
        </div>
        <div className="aboutcont" id="about">
          <h1>
            About <span style={{ color: "rgb(218, 63, 29)" }}>Me :</span>
          </h1>
          <p>
            I am Sabari Nayagam. I graduated from the SRM Institute of Science
            and Technology with a B.Tech. I have one year of experience as a
            front-end developer. I have completed a full-stack Java development
            course and received certification in it.
            <span className="spancont">
              {" "}
              and proficient in HTML5, CSS3, Bootstrap, Material-UI, JavaScript,
              Redux, React JS, Yup, Formik, Node JS, Express JS, Java, MySQL,
              GitHub, and API integration,REST API.
            </span>
          </p>
        </div>
      </div>
      <div className="wave2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,165.3C672,149,768,139,864,160C960,181,1056,235,1152,229.3C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="black">
        {/* ..................Certification................... */}

        <div className="center">
          <h1 id="heading">
            Certification <span style={{ color: "rgb(218, 63, 29)" }}>:</span>
          </h1>
        </div>
        <div className="certification">
          <h2>FULL STACK JAVA DEVELOPER</h2>
        </div>

        {/* ..................Technical Skills................... */}

        <div className="techskill">
          <h1 id="heading">
            Technical <span>skills :</span>
          </h1>
        </div>
        <table>
          <thead></thead>
          <tbody>
            {data.map((item, index) => {
              const key = Object.keys(item)[0];
              const value = item[key];
              return (
                <tr key={index}>
                  <td>
                    <h3>{key}</h3>
                  </td>
                  <td>
                    {Array.isArray(value) ? (
                      value.map((val, i) => (
                        <button
                          key={i}
                          className="btn"
                          id="btn"
                          style={{
                            left: "20px",
                          }}
                        >
                          {/* <button key={i} className="tablebtn"> */}
                          {val}
                        </button>
                      ))
                    ) : (
                      <button>{value}</button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* ..................Project................... */}

        <div className="techskill" id="projects">
          <h1 id="heading">
            My <span>Project :</span>
          </h1>
        </div>

        <div className="project_list">
          <div className="project">
            <img src={react} alt="React Project Photo"></img>
            <div className="layer">
              <h1>E-Commerce Website</h1>
              <p>
                Created a dynamic E-Commerce platform using HTML5, CSS3 ,
                Bootstrap, material UI, Formik, Yup, JavaScript, React.js,
                Redux, Saga, React Router Dom,CRUD operations,Formik,Yup,API
                integration.
              </p>
              <a
                href="https://sabari-ecommerce-project.netlify.app/"
                target="_blank"
              >
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={apartment} alt="Apartment Website"></img>
            <div className="layer">
              <h1>Apartment Website</h1>
              <p>
                Developed a modern apartment website using React, showcasing a
                responsive design that adapts to all devices, smooth animations
                for interactive visuals, efficient code for optimal performance,
                and a user-friendly interface.
              </p>

              <a href="https://apartment-website.netlify.app/" target="_blank">
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={w3school} alt="W3school Project_Photo"></img>
            <div className="layer">
              <h1>W3schools Landing Page</h1>
              <p>
                The project involved designing and implementing the user
                interface using HTML, CSS, and React, integrating dynamic
                functionality with JavaScript and React hooks
              </p>

              <a
                href="https://sabarinayagam.github.io/w3schools/"
                target="_blank"
              >
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          <div className="project">
            <img src={restaurant} alt=" Restaurant Project_Photo"></img>
            <div className="layer">
              <h1>Restaurant Website</h1>
              <p>
                Restaurant project using Java and MySQL. the Food Delivery
                Application allows users to order food from a variety of
                restaurants and have it delivered to their location.
              </p>
              <a
                href="https://sabari-ecommerce-project.netlify.app/"
                target="_blank"
              >
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <img src={calculater} alt="Calculater Project_Photo"></img>
            <div className="layer">
              <h1>Calculator</h1>
              <p>
                A fully functional calculator created using HTML, CSS, and
                JavaScript
              </p>

              <a
                href="https://sabarinayagam.github.io/Calculator/"
                target="_blank"
              >
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          {/*  */}
          <div className="project">
            <img src={zomato} alt="Zomato Project_Photo"></img>
            <div className="layer">
              <h1>Zomato Landing Page</h1>
              <p>
                Zomato landing page in web development using
                HTML5,CSS3,Javascript.
              </p>

              <a
                href="https://sabarinayagam.github.io/Zomato-Landing-Page/"
                target="_blank"
              >
                <p>
                  {" "}
                  <IconButton
                    size="60px"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1, size: "20px" }}
                  >
                    <LaunchIcon></LaunchIcon>
                  </IconButton>
                  Live Link
                </p>
              </a>
            </div>
          </div>
          {/*  */}
        </div>

        {/* ..................Contact................... */}

        <div className="techskill" id="projects">
          <h1 id="heading">
            Contact <span>Details :</span>
          </h1>
        </div>

        <div className="contact" id="contact">
          <div className="row">
            <div className="cont_left">
              <h1 className="sub_title">
                Contact <span style={{ color: "#C94B15" }}>Me :</span>
              </h1>
              <a href="mailto:sabarinayagam@gmail.com" target="_blank">
                <p>
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <EmailOutlinedIcon></EmailOutlinedIcon>
                  </IconButton>
                  sabarinayagam@gmail.com
                </p>
              </a>
              <a href="tel:9952375090">
                <p>
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <SmartphoneIcon></SmartphoneIcon>
                  </IconButton>
                  9952375090
                </p>
              </a>
              <div className="icon">
                <a href="https://wa.me/9952375090" target="_blank">
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <WhatsAppIcon></WhatsAppIcon>
                  </IconButton>
                </a>
                <a
                  href="https://www.linkedin.com/in/sabari-nayagam-0b9a801a0/"
                  target="_blank"
                >
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <LinkedInIcon></LinkedInIcon>
                  </IconButton>
                </a>
                <a
                  href="https://github.com/Sabarinayagam?tab=repositories"
                  target="_blank"
                >
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                  >
                    <GitHubIcon></GitHubIcon>
                  </IconButton>
                </a>
                <a href="mailto:sabarinayagam@gmail.com" target="_blank">
                  {" "}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                      mr: 1,
                      "&:hover": {
                        fontSize: "50px",
                      },
                    }}
                  >
                    <EmailOutlinedIcon
                      sx={{ "&hover": { fontSize: "50px", color: "red" } }}
                    ></EmailOutlinedIcon>
                  </IconButton>
                </a>
              </div>
              <a href={Sabari_Resume} download="Sabari Resume.pdf">
                <button className="btn">Download CV</button>
              </a>
            </div>
            <div className="cont_right">
              <form>
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  required
                ></input>
                <input
                  type="email"
                  name="Email"
                  placeholder="abc@gmail.com"
                  required
                ></input>
                <textarea
                  name="Message"
                  rows="6"
                  placeholder="Your Message..."
                ></textarea>
                <button className="btn">submite</button>
              </form>
            </div>
          </div>
        </div>
        {/* ..................Footer................... */}
        <footer>
          <p>© 2024 || Sabari Nayagam. All Rights Reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
