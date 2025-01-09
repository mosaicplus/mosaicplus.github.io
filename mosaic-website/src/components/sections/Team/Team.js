import React from "react";

import TeamMember from "./TeamMember";
import nicoleFront from "../../../content/graphics/nicole.jpg";
import juanFront from "../../../content/graphics/juan.jpeg";
import jasmineFront from "../../../content/graphics/jasmine.png";
import annaFront from "../../../content/graphics/anna.jpg";
import mongFront from "../../../content/graphics/mong.jpeg";
import kamFront from "../../../content/graphics/kam.JPG";
import sosaFront from "../../../content/graphics/sosa.jpeg"
import bryceFront from "../../../content/graphics/bryce.jpeg";
import matisseFront from "../../../content/graphics/matisse.jpg";
import alondraFront from "../../../content/graphics/alondra.png";
import astridFront from "../../../content/graphics/astrid.jpeg";
import icon1 from "../../../content/graphics/icons/icon1.png"; // Add flip side photo
import icon2 from "../../../content/graphics/icons/icon2.png"; // Add flip side photo
import icon3 from "../../../content/graphics/icons/icon3.png"; // Add flip side photo
import icon4 from "../../../content/graphics/icons/icon4.png"; // Add flip side photo
import icon5 from "../../../content/graphics/icons/icon5.png"; // Add flip side photo
import icon6 from "../../../content/graphics/icons/icon6.png"; // Add flip side photo
import icon7 from "../../../content/graphics/icons/icon7.png"; // Add flip side photo
import icon8 from "../../../content/graphics/icons/icon8.png"; // Add flip side photo
import icon9 from "../../../content/graphics/icons/icon9.png"; // Add flip side photo


import "./Team.css";

// each team member has a photo (front and back),
// name, year, position, LinkedIn, GitHub, email, and bio


const director1 = {
  photo: kamFront, // Front photo
  flipPhoto: icon2, // Flip side photo
  name: "Kamryn Walker",
  year: 26,
  linkedin: "https://www.linkedin.com/in/kamryn-walker/",
  github: "",
  email: "kamryn_walker@brown.edu",
  position: "Co-Coordinator",
  bio: "Hi, I'm Kamryn! I've been involved with Mosaic+ since I first came to Brown and I'm always happy to welcome new members :)",
  color: "#ed3f5c"
};

const director2 = {
  photo: astridFront, // Front photo
  flipPhoto: icon1, // Flip side photo
  name: "Astrid Moreno-Sanabria",
  year: 26,
  linkedin: "https://www.linkedin.com/in/astrid-moreno-sanabria/",
  github: "",
  email: "astrid_moreno-sanabria@brown.edu",
  position: "Co-Coordinator",
  bio: "Hi everyone! I'm a Junior concentrating in Computer Science. I love to read fantasy novels, battle dragons, and sleep on piles of gold. I'm very excited to be your TA this semester!",
  color: "#ed3f5c"
};

const publicityChair1 = {
  photo: nicoleFront, // Front photo
  flipPhoto: icon7, // Flip side photo
  name: "Nicole Sanchez-Soto",
  year: 26,
  linkedin: "https://www.linkedin.com/in/nicole-sanchez-soto-365a34252/",
  github: "https://github.com/nicolesanchez-soto",
  email: "nicole_sanchez-soto@brown.edu",
  position: "Website Development",
  bio: "Hi there! I'm a Junior from New York concentrating in CS. I like going to the gym, listening to music (send me recs :D), and finding cute spots in prov (if you know any pls share lol :P). Excited to meet you all! (੭˃ᴗ˂)੭",
  color: "#ed3f5c"
};


const publicityChair2 = {
  photo: sosaFront, // Front photo
  flipPhoto: icon9, // Flip side photo
  name: "Aisosa Idahosa",
  year: 27,
  linkedin: "https://www.linkedin.com/in/aisosa-idahosa/",
  github: "",
  email: "aisosa_idahosa@brown.edu",
  position: "Publicity Chair",
  bio: "Hi everyone! I'm a sophomore from the Philly area studying studying CS and VISA. In my free time, I love reading, crocheting, and recently I've been getting into ceramics! Super excited to meet all of y'all!",
  color: "#ed3f5c"
};

const mentorshipChair1 = {
  photo: juanFront, // Front photo
  flipPhoto: icon2, // Flip side photo
  name: "Juan Garcia",
  year: 25,
  linkedin: "https://www.linkedin.com/in/jgarciacardenas",
  github: "https://github.com/jgarciacardenas",
  email: "juan_garcia@brown.edu",
  position: "Mentorship Chair",
  bio: "My name is Juan and I’m a senior at Brown concentrating in Computer Science and Education Studies. I like to spend my free time playing video games, trying out new coffee spots, or listening to music.",
  color: "#ed3f5c"
};

const mentorshipChair2 = {
  photo: alondraFront, // Front photo
  flipPhoto: icon6, // Flip side photo
  name: "Alondra Perez",
  year: 27,
  linkedin: "www.linkedin.com/in/alondra-perez-a6088127b",
  github: "",
  email: "alondra_perez@brown.edu",
  position: "Mentorship Chair",
  bio: "Hey everyone, I'm Alondra! I am currently a sophomore studying CS from California, and I am also a first-gen Latina! On Mosaic+, I am co-coordinator of the mentorship program/chair, and I am beyond excited to meet everyone who decides to become a part of our club. Feel free to talk to/ask me about coffee/boba shops around Brown, cooking, music recommendations, and anything else ♡",
  color: "#ed3f5c"
};

const eventCoordinator1 = {
  photo: jasmineFront, // Front photo
  flipPhoto: icon3, // Flip side photo
  name: "Jasmine Kamara",
  year: 27,
  linkedin: "https://www.linkedin.com/in/jasmine-kamara/",
  github: "https://github.com/jkamara444",
  email: "jasmine_kamara@brown.edu",
  position: "Events Coordinator",
  bio: "Hi, my name is Jasmine. I’m concentrating in Computer Science and Science, Technology, and Society. I’m particularly interested in developing socially conscious software and researching racism in AI facial recognition systems. Outside of CS, I run a handmade jewelry business where I sell waist beads and bracelets.I also enjoy crocheting, reading, and listening to music.You can often find me hanging out with friends at the Brown Center for Students of Color(BCSC) and the Mosaic+ room!",
  color: "#ed3f5c"
};

const eventCoordinator2 = {
  photo: annaFront, // Front photo
  flipPhoto: icon4, // Flip side photo
  name: "Anna Le",
  year: 26,
  linkedin: "https://www.linkedin.com/in/anna-le7",
  github: "https://github.com/ailee37",
  email: "jennifer_le@brown.edu",
  position: "Events Coordinator",
  bio: "Hi everyone! My name is Anna, and I'm a junior concentrating in CS here at Brown! I'm pretty much always in the Mosaic+ room, so feel free to swing by anytime. I'll probably be crocheting, crafting, coding, or prepping for a Snail Mail meeting. Excited to meet everyone!!",
  color: "#ed3f5c"
};

const eventCoordinator3 = {
  photo: bryceFront, // Front photo
  flipPhoto: icon9, // Flip side photo
  name: "Bryce Saddler",
  year: 25,
  linkedin: "https://www.linkedin.com/in/bryce-saddler-a95a27210/",
  github: "",
  email: "bryce_saddler@brown.edu",
  position: "Events Coordinator",
  bio: "Hi! I’m a senior concentration in computer science & economics. Outside of school, I love watching any genre of movies/tv shows, going on walks, going to the gym, and having talks about literally anything :) ",
  color: "#ed3f5c"
};


const liaison = {
  photo: mongFront, // Front photo
  flipPhoto: icon5, // Flip side photo
  name: "Mong Hailemariam",
  year: 27,
  linkedin: "www.linkedin.com/in/mengistie-h",
  github: "https://github.com/menge456/",
  email: "mengistie_hailemariam@brown.edu",
  position: "First Year Liaison",
  bio: "I'm Mong, a sophomore majoring in CS-Math. I am currently the First-Year Liaison, so if you're a First-Year and have any questions about the election process for that (it's a little different from other roles, we apply in early October), feel free to ask! I'm typically in the Mosaic room avoiding work if you ever want to chat.",
  color: "#ed3f5c"
};

const finance = {
  photo: matisseFront, // Front photo
  flipPhoto: icon8, // Flip side photo
  name: "Matisse Doucet",
  year: 26,
  linkedin: "https://www.linkedin.com/in/matissedoucet",
  github: "https://github.com/matissedoucet",
  email: "matisse_doucet@brown.edu",
  position: "Finance Chair",
  bio: "Hello!! My name is Matisse though I also go by Mat :) I'm pretty heavily involved in social justice activism and am interested in how we can use software to address systemic inequities. I'm passionate about public transportation and I enjoy baking banana bread and cookies <3",
  color: "#ed3f5c"
};



function mapper(item) {
  return item.map((item, index) => (
    <TeamMember index={index} item={item} />
  ));
}

const allMembers = mapper([
  director1,
  director2,
  publicityChair1,
  publicityChair2,
  finance,
  liaison,
  eventCoordinator3,
  eventCoordinator2,
  mentorshipChair1,
  mentorshipChair2,
  eventCoordinator1,
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
