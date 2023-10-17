import img1 from "../assets/boy.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { gsap, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const HomeIntro = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.set(
      [".home-Intro", ".left", ".right", ".h1", ".h2", ".talk-btn", ".my-self"],
      {
        opacity: 0,
      }
    );
    gsap.to(".home-Intro", {
      opacity: 1,
    });
    gsap.to(".left", {
      delay: 1,
      duration: 1,
      rotate: "360",
      opacity: "1",
    });
    gsap.to(".right", {
      delay: 1,
      duration: 1,
      opacity: "1",
      y: 5,
    });
    gsap.to(".h1", {
      delay: 1,
      duration: 1,
      rotate: -"360",
      opacity: "1",
    });
    gsap.to(".h2", {
      delay: 1,
      duration: 1,
      rotate: "360",
      opacity: "1",
    });
    gsap.to(".talk-btn", {
      duration: 1,
      rotate: -"360",
      opacity: "1",
    });
    gsap.to(".my-self", {
      duration: 1,
      rotate: "360",
      opacity: "1",
      delay: 1,
    });
  });
  return (
    <div className="home-Intro" id="home">
      <section className="section-1">
        <div className="left">
          <h3 className="h1">
            Hi <span>I&apos;m</span>
          </h3>
          <h1 className="h1">Hassaam Mughal</h1>
          <h2 className="h2">
            I am <span>MERN Stack</span> Developer
          </h2>
          <p className="my-self">
            A MERN stack developer with 6 months of experience is a software
            engineer who is proficient in the following technologies like
            MongoDB, Express.js, React.js, and Node.js.
          </p>
          <button className="talk-btn">Let&apos;s Talk</button>
        </div>
        <div className="right">
          <img src={img1} />
        </div>
      </section>
      <section className="section-2">
        <p>Check out my</p>
        <div className="btns">
          <button>
            <a href="/">
              <InstagramIcon className="icon" />
            </a>
          </button>
          <button>
            <a href="/">
              <LinkedInIcon className="icon" />
            </a>
          </button>
          <button>
            <a
              target="_blank"
              href="https://github.com/hassaammgl/"
              rel="noreferrer"
            >
              <GitHubIcon className="icon" />
            </a>
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomeIntro;
