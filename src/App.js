import CallToAction from "./contents/downloadresume";
import Experiences from "./contents/experience";
import HomePage from "./contents/homepage";
import Project from "./contents/projects";
import SkillBar from "./contents/skills";
import Navbar from "./partials/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <SkillBar />
      <CallToAction />
      <Project />
      <Experiences/>
    </div>

  );
}

export default App;
