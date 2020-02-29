import React from "react"
import Navbar from "../navbar/navbar"
import "./contact.scss"

const Contact = () => {
   return (
      <div className="contact-wrapper">
         <Navbar />
         <div className="contact-container">

            <p>Contact Me</p>
            <div>
               <form action="/action_page.php">
                  <label>First Name </label>
                  <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                  <br />
                  <label>Last Name </label>
                  <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                  <br />
                  <label>Email </label>
                  <input type="email" id="email" name="email" placeholder="Your email" />
                  <br />
                  <label>Subject</label>
                  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                  <input type="submit" value="Submit" />
               </form>
            </div>
         </div >
      </div >
   )
}

export default Contact