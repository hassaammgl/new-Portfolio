import HomeIntro from "./HomeIntro";
import Skills from "./Skills";
import Technologies from "./Technologies";
import Projects from "./Projects";
import Contacts from "./Contacts";

const Home = () => {

  return (
    <div className="home">
      <HomeIntro />
      <Skills />
      <Technologies />
      <Projects />
      <Contacts/>
    </div>
  );
};

export default Home;
