import React, { useState } from "react";
import TeamMember from "./TeamMember";

import alexCueva from "../../../content/graphics/alex_cueva.jpg";
import bryceSaddler from "../../../content/graphics/bryce_saddler.jpg";
import kamrynWalker from "../../../content/graphics/kamryn_walker.JPG";
import nicoleSanchez from "../../../content/graphics/nicole_sanchez.jpg";
import jordanStornelli from "../../../content/graphics/jordan_stornelli.jpg";
import sydneyMeza from "../../../content/graphics/sydney_meza.jpg";
import joshuaOkwaning from "../../../content/graphics/no_photo.jpg";
import madelynMoore from "../../../content/graphics/no_photo.jpg";

import "./Team.css";

//each team member has a photo,
//name, year, position linkedin, github, email

const coCord1 = {
  photo: alexCueva,
  name: "Alexander Cueva",
  year: 26,
  linkedin: "https://www.linkedin.com/in/alexander-cueva-94b381251/",
  github: "",
  email: "alexander_cueva@brown.edu",
  position: "Co-Coordinator",
  color: "#ed3f5c"
};

const coCord2 = {
  photo: madelynMoore,
  name: "Madelyn Moore",
  year: 26,
  linkedin: "",
  github: "",
  email: "madelyn_moore@brown.edu",
  position: "Co-Coordinator",
  color: "#ed3f5c"
};

const mentorCord = {
  photo: bryceSaddler,
  name: "Bryce Saddler",
  year: 25,
  linkedin: "https://www.linkedin.com/in/bryce-saddler-a95a27210/",
  github: "",
  email: "bryce_sadler@brown.edu",
  position: "Mentorship Co-Coordinator",
  color: "#641cb5"
};

const communityDev1 = {
  photo: nicoleSanchez,
  name: "Nicole Sanchez-Soto",
  year: 26,
  linkedin: "https://www.linkedin.com/mwlite/in/nicole-sanchez-soto-365a34252",
  github: "",
  email: "nicole_sanchez-soto@brown.edu",
  position: "Mentorship Co-Coordinator",
  color: "#acd7dc"
};

const communityDev2 = {
  photo: joshuaOkwaning,
  name: "Joshua Okwaning",
  year: 26,
  linkedin: "",
  github: "",
  email: "joshua_okwaning@brown.edu",
  position: "Community Development",
  color: "#acd7dc"
};

const communityDev3 = {
  photo: kamrynWalker,
  name: "Kamryn Walker",
  year: 26,
  linkedin: "https://www.linkedin.com/in/kamryn-walker/",
  github: "",
  email: "kamryn_walker@brown.edu",
  position: "Community Development",
  color: "#acd7dc"
};

const branding1 = {
  photo: jordanStornelli,
  name: "Jordan Stornelli",
  year: 26,
  linkedin: "",
  github: "",
  email: "jordan_stornelli@brown.edu",
  position: "Branding",
  color: "#fffba0"
};

const branding2 = {
  photo: sydneyMeza,
  name: "Sydney Meza",
  year: 26,
  linkedin: "",
  github: "",
  email: "sydney_meza@brown.edu",
  position: "Website Development",
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
    </div>
  );
}

export default TeamComponent;
