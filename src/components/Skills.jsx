import { FaCode, FaNode } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className="skills">
      <h2 className="fade-right">
        My <span>Services</span>
      </h2>
      <h1>What I Do...</h1>
      <div className="boxes">
        <div className={"box"}>
          <RiReactjsLine className="icon" />
          <h3>Frontend</h3>
          <p>
            Hi, I am proficient in Frontend apps with React. I also use SCSS,
            CSS3, TAILWIND, CHAKRA UI and CHAKRA UI for web apps.I am also
            proficient in Redux Toolkit, which I use for advanced projects.
          </p>
        </div>
        <div className="box">
          <FaNode className="icon" />
          <h3>Backend</h3>
          <p>
            I have strong knowledge of express js and node js. I can create a
            better express Apis for MERN STACK Projects. I also use JWT
            Authentication for more secure authentication for web apps.
          </p>
        </div>
        <div className="box">
          <FaCode className="icon" />
          <h3>Full Stack</h3>
          <p>
            I am also a Full-Stack Developer with the MERN Stack Technologies. I
            also create portfolios, Landing Pages, and other Business web apps
            that help you to grow your Business and help you to earn more from
            it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
