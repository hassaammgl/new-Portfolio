import img11 from "../assets/web1.avif";
import img22 from "../assets/web2.jpg";
import img33 from "../assets/web3.png";
import img55 from "../assets/web5.jpeg";
import img66 from "../assets/web6.jpg";
import img88 from "../assets/web8.webp";
import img99 from "../assets/web9.png";
import img1010 from "../assets/web10.jpg";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="h1">Projects</h1>
      <div className="list">
        <Project
          className="proj"
          imgsrc={img11}
          description={"A Portfolio for UI/UX Designer"}
        />
        <Project
          className="proj"
          imgsrc={img22}
          description={"A Website for Wildlife care"}
        />
        <Project
          className="proj"
          imgsrc={img33}
          description={"A Website for Team of Web Developers"}
        />
        <Project
          className="proj"
          imgsrc={img55}
          description={"The Portfolio for Frontend Web Developer"}
        />
        <Project
          className="proj"
          imgsrc={img66}
          description={"Business Website for real Estate company"}
        />
        <Project
          className="proj"
          imgsrc={img88}
          description={"Portfolio website for Frontend Developer"}
        />
        <Project
          className="proj"
          imgsrc={img99}
          description={"E-commerce Website design for the company"}
        />
        <Project
          className="proj"
          imgsrc={img1010}
          description={"Life Coaching website ALLAN JOHANSON"}
        />
      </div>
    </div>
  );
};

const Project = (props) => {
  // eslint-disable-next-line react/prop-types
  const { imgsrc, description } = props;
  return (
    <div className="item">
      <img src={imgsrc} alt={description} />
      <h4>{description}</h4>
    </div>
  );
};

export default Projects;
