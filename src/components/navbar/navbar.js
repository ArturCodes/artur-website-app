import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { IoIosMail, IoIosContact } from "react-icons/io"
import { MdWork } from "react-icons/md"

import "./navbar.scss"


class Navbar extends Component {

   state = {
      btnOn: true
   }
   // Hamburger Button Switch 
   onNavBtnClick = () => {
      this.setState(({ btnOn }) => {
         return {
            btnOn: !btnOn
         }
      })
   }

   render() {
      const { btnOn } = this.state;
      // Classes depending on theh state
      let navWrapperClass = "navbar-wrapper"
      if (btnOn) {
         navWrapperClass += " hide"
      }

      return (
         <div>

            <button className="nav-button" onClick={this.onNavBtnClick}>
               <div className="line"></div>
               <div className="line"></div>
               <div className="line"></div>
            </button>

            <div className={navWrapperClass}>
               <NavLink exact to="/" activeClassName="active"><FaHome className="a-he" />Home</NavLink>
               <NavLink to="/about" activeClassName="active"><IoIosContact className="a-ae" />About</NavLink>
               <NavLink to="/portfolio" activeClassName="active"><MdWork className="a-pe" />Portfolio</NavLink>
               <NavLink to="/contact" activeClassName="active"><IoIosMail className="a-ce" />Contact</NavLink>
            </div>

         </div>
      )
   }
}

export default Navbar