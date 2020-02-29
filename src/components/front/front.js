import React from "react"
import "./front.scss"
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoIosContact, IoIosMail } from "react-icons/io"
import { MdWork } from "react-icons/md"

const Front = (props) => {
   return (
      <div className="container">

         <div className="header">
            <h1>Artur Shapiro</h1>
            <p>Front End Web Developer</p>
         </div>

         <div className="content">
            <div className="nav">
               <ul>
                  <li>
                     <a href="../about"><IoIosContact className="en" /> About</a>
                  </li>
                  <li>
                     <a href="/portfolio"><MdWork className="en" /> Portfolio</a>
                  </li>
                  <li>
                     <a href="/contact"><IoIosMail className="en" /> Contact</a>
                  </li>
               </ul>
            </div>

            <div className="social">
               <ul>
                  <li>
                     <a href="https://twitter.com/ShapiroArtur"><FaTwitter className="es" /> Twitter</a>
                  </li>
                  <li>
                     <a href="https://www.linkedin.com/in/artur-shapiro/"><FaLinkedinIn className="es" /> LinkedIn</a>
                  </li>
                  <li>
                     <a href="https://github.com/ArturCodes"><FaGithub className="es" /> GitHub</a>
                  </li>
               </ul>
            </div>
         </div>

      </div>
   )
}
export default Front