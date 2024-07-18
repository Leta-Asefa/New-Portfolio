import Contacts from "./contents/contacts";
import CallToAction from "./contents/downloadresume";
import Education from "./contents/education";
import Experiences from "./contents/experience";
import HomePage from "./contents/homepage";
import Project from "./contents/projects";
import SkillBar from "./contents/skills";
import Testimonials from "./contents/testimonials.";
import Navbar from "./partials/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <SkillBar />
      <CallToAction />
      <Project />
      <Experiences />
      <Education />
      <Testimonials />
      <Contacts />
     
      
    </div>

  );
}

export default App;
