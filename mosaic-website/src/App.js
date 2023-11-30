import "./App.css";
import NavBar from "./components/sections/Navigation/NavBar";
import LandingComponent from "./components/sections/Landing/Landing";
import AboutComponent from "./components/sections/About/About";
import TeamComponent from "./components/sections/Team/Team";
import EventsComponent from "./components/sections/Events/Events";
import MentorshipComponent from "./components/sections/Mentorship/Mentorship";
import TransitionProgramComponent from "./components/sections/Transition Program/TransitionProgram";
import ContactComponent from "./components/sections/Contact/Contact";
import InternshipComponent from "./components/sections/Internships/Internships";

function App() {
  return (
    <div className="App">
      <NavBar />
      <LandingComponent />
      <div className="main-text">
        <EventsComponent />
        <AboutComponent />
        <TeamComponent />
        <TransitionProgramComponent />
        <MentorshipComponent />
        <InternshipComponent/>
        <ContactComponent />
      </div>
    </div>
  );
}

export default App;
