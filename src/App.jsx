import React from "react";
import "./App.css";
import ProfilePic from "./assets/Images/ProfilePic.png";
import css from "./assets/Images/css.png";
import html from "./assets/Images/html.png";
import js from"./assets/Images/js.png";

let firstName = "Aaron";
let lastName = "Laxamana";
let Course = "Bachelor of Science in Information Technology"
function fb(){
  window.location.href = "https://www.facebook.com/Aarooonnnnnn";
}

function github(){
  window.location.href = "https://github.com/amlaxamana";
}
function App() {
  return (
    <div className="Container">
      <div className="Logo">

      </div>
      <div className="NavBar">
        <a href="https://www.linkedin.com/in/aaron-laxamana-692b2533a/">LinkedIn</a>
        <a href="https://github.com/amlaxamana">GitHub</a>
        <a href="https://www.facebook.com/Aarooonnnnnn">Contact</a>
      </div>
      <div className="MainSection">
        <div className="Information">
          <h1>Hello, I am {firstName} {lastName}</h1>
          <p className="Description">
            Highly motivated {Course} student with a dedicated focus on developing innovative, scalable solutions. Possesses a strong academic foundation in system architecture and a proactive commitment to mastering emerging technologies and industry best practices.
          </p>
          <div className="Buttons">
            <button onClick={fb}>Let's Connect</button>
            <button onClick={github}>Download Resume</button>
          </div>

        </div>
        <div className="ProfilePicture">
          <img 
            src={ProfilePic}
            alt="Profile"
          />
          <div className="Technologies">
            <img className="TechImage" src={css} alt="Tech Stack" />
            <img className="TechImage" src={html} alt="Tech Stack" />
            <img className="TechImagejs" src={js} alt="Tech Stack" />
          </div>
        </div>
      </div>
      <div className="Projects">
        <h1 className="Title">Projects</h1>
      </div>
      <div className="Footer">
        <p>© 2024 {firstName} {lastName}. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
