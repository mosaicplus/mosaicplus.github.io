import React, { useState } from "react";
import redSquare from "../../../content/graphics/red-square.png";
import robertBush from "../../../content/graphics/robert-bush.jpeg";
import markMapeke from "../../../content/graphics/mark-mapeke.jpeg";
import arrington from "../../../content/graphics/arrington-harper.jpeg";
import redSquare2 from "../../../content/graphics/erick.png";
import serena from "../../../content/graphics/serena.jpeg";
import paloma from "../../../content/graphics/paloma-salseda.jpeg";
import josue from "../../../content/graphics/josue-cruz.jpeg";
import TeamMember from "./TeamMember";
import "./Team.css";

//each team member has a photo,
//name, year, position linkedin, github, email

const coCord1 = {
  photo: redSquare2,
  name: "Erick Lerena",
  year: 23,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Co-Coordinator",
  color: "#ed3f5c"
};

const coCord2 = {
  photo: redSquare,
  name: "Fernando Cisneros",
  year: 23,
  linkedin: "https://www.linkedin.com/in/fernando-cisneros-8661a81a9/",
  github: "",
  email: "fernando_cisneros@brown.edu",
  position: "Co-Coordinator",
  color: "#ed3f5c"
};

const mentorCord = {
  photo: markMapeke,
  name: "Marc Mapeke",
  year: 23,
  linkedin: "https://www.linkedin.com/in/marcmapeke",
  github: "https://github.com/eirik64",
  email: "marc_mapeke@brown.edu",
  position: "Mentorship Coordinator",
  color: "#641cb5"
};

const communityDev1 = {
  photo: paloma,
  name: "Paloma Salseda",
  year: 23,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Community Development",
  color: "#acd7dc"
};

const communityDev2 = {
  photo: robertBush,
  name: "Robert Bush",
  year: 23,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Community Development",
  color: "#acd7dc"
};

const communityDev3 = {
  photo: arrington,
  name: "Arrington Harper",
  year: 23,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Community Development",
  color: "#acd7dc"
};

const branding1 = {
  photo: josue,
  name: "Josue Cruz",
  year: 24,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Branding",
  color: "#fffba0"
};

const branding2 = {
  photo: serena,
  name: "Serena Pulopot",
  year: 23,
  linkedin: "https://www.linkedin.com/in/erick-lerena-872330191/",
  github: "https://github.com/eirik64",
  email: "erick_lerena@brown.edu",
  position: "Branding",
  color: "#fffba0"
};


function mapper(item) {
  return item.map((item, index) => (
    <TeamMember index={index} item={item} />
  ));
}

const allMembers = mapper([
  coCord1,
  coCord2,
  communityDev1,
  communityDev2,
  communityDev3,
  mentorCord,
  branding1,
  branding2,
]);

function TeamComponent() {
  return (
    <div className="team">
      <div className="section-header red-header">
        <h1>Our Team</h1>
      </div>

      <div className="team-section">
      <div className="team-row">{allMembers}</div>
      </div>
      {/* <div className="team-row">{cordMembers}</div>
            <div className="team-row">{communityMembers}</div>
            <div className="team-row">{mentorMembers}</div>
            <div className="team-row">{brandingMembers}</div> */}
    </div>
  );
}

export default TeamComponent;
