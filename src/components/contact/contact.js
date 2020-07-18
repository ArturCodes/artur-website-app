import React from "react";
import Navbar from "../navbar/navbar";
import "./contact.scss";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Navbar />
      <div className="contact-container">

        <div className="mail">
          <h3>Contact Me</h3>
          <p><IoIosMail /> Email is the best way to reach me</p>
          <a href="mailto:ArturShapiro@gmail.com">
              ArturShapiro@Gmail.com
          </a>
        </div> {/* mail */}

        <div className="other ">

          <p>But you can also try reaching me through </p>

          <div className="other-social">

            <a href="https://twitter.com/ShapiroArtur">
              <FaTwitter className="es" /> Twitter
            </a>
            <a href="https://www.linkedin.com/in/artur-shapiro/">
              <FaLinkedinIn className="es" /> LinkedIn
            </a>
            <a href="https://github.com/ArturCodes">
              <FaGithub className="es" /> GitHub
            </a>
          </div>

        </div> {/* other */}

      </div>
    </div>
  );
};

export default Contact;
