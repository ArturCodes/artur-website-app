import React from "react"
import Navbar from "../navbar/navbar"
import "./about.scss"

const About = () => {
   return (
      <div id="top" className="about-wrapper">

         <Navbar />

         <div className="content-container">

            <div className="about-intro">
               <h2>Hi there!</h2>
               <p>I'm Artur, I'm a self-taught Front-End Web Developer and I mainly working with React.js. Below you will find information on my education, some of my skills, and a bit about me</p>
            </div>


            <div className="about-skills">
               <h2>Professional Skills</h2>
               <h3>Programming Langauges / Libraries</h3>

               <ol>
                  <li>HTML / CSS / SCSS</li>
                  <li>React / React Router / <span>Redux</span></li>
                  <li>JavaScript / <span>Typescript</span> </li>
                  <li> <span>jQuery</span> </li>
                  <li>Bootstrap </li>
                  <li>Git / GitHub</li>
                  <li><span>Wordpress</span></li>
                  <li><span>PHP</span></li>
               </ol>

               <h3>Software</h3>
               <ol>
                  <li>Photoshop / Illustrator </li>
                  <li>After Effects / Premiere </li>
                  <li>Visual Studio Code </li>
                  <li><span>Lunacy (Graphic design)</span> </li>
                  <li>GitHub Desktop </li>
               </ol>
               <span>* Learning / A bit of knowledge</span>
            </div>

            <div className="about-education">
               <h2>Education</h2>

               <div className="UMN">
                  <p><a href="https://twin-cities.umn.edu/">University of Minnesota - Twin Cities </a> <span>Sep. 2012 - May. 2016</span> </p>
                  <p>Bachelors of Arts - Biology, Society, and Environment</p>
               </div>

               <div className="NHCC">
                  <p><a href="https://www.nhcc.edu/">North Hennepin Community College</a> <span>2010 - 2012</span> </p>
                  <p> Associates Degree - Chemistry</p>
               </div>

               <div className="RA">
                  <p><a href="https://ahs.rdale.org/">Robbinsdale Armstrong High School</a> <span>2005 - 2009</span> </p>
                  <p> Diploma</p>
               </div>

               <div className="hr" />

               <p>I taught myself web development through numerous online resources that I could find. Those include websites like, <a href="https://medium.com/">Medium</a>, <a href="https://www.w3schools.com/">w3school</a>, <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>, <a href="https://developer.mozilla.org/en-US/"> MDN</a>, <a href="https://reactjs.org/">React</a>, <a href="https://css-tricks.com/">CSS-Tricks</a>, among dozens others. Completed several courses from websites such as <a href="https://www.udemy.com/">Udemy</a>, <a href="https://scrimba.com/">Scrimba</a>, <a href="https://www.lynda.com/">lynda</a>, and lastly <a href="https://youtube.com/">YouTube</a> and <a href="https://stackoverflow.com/">StackOverflow</a>.</p>
            </div>


            <div className="about-me">
               <h2>About Me</h2>
               <div className="p-right">
                  <h3>Background</h3>
                  <div className="img-right">
                     <img src={require('../img/SelfE.jpg')} alt="Selfy of Artur Shapiro" />
                  </div>
                  <p>I was born in Ukraine, but raised in Israel. My family then moved to the States when I was 13. I went to the University of Minnesota and painstakingly got my degree. After working multiple jobs, I realized none of them were fulfilling. I realized what I wanted was something that was challenging and something that I can become really good at.</p>
                  <p>Back in at the University, it never occurred to me that computer science was an option, and somehow by accident I stumbled upon web development, and ever since that day I've been hooked.</p>
                  <p>I'm not going to deny, the journey to this point has been quite challanging. Life has thrown couple curve balls at me that slowed me down quite a bit. I had to deal with financial issues and health issues, but through sweat and tears I kept on going.</p>
               </div>
               <h3>Hobbies</h3>
               <p>Their are many things that I love doing in my free time. At the top of the list its camping and hiking, movies and anime, gaming, filming, fishing, mushroom hunting, food and beer, and of course hanging out with my friends and family, because without them a lot of those activities would be quite dull ;) </p>
            </div>

         </div>  {/* content-container */}

      </div>  // about-wrapper
   )
}

export default About