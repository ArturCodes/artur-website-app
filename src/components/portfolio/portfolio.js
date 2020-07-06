import React from "react";
import Navbar from "../navbar/navbar";
import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <Navbar />
      <div className="portfolio-container">
        {/* *********************** */}
        <div className="p-container">
          <div className="info">
            <h4>Todo App</h4>
            <p>Build with a help of a tutorial, it was challenging at first but the more I worked on the project the more I learned.</p>
            <span>Build with React, Bootstrap, JavaScript, HTML, SCSS</span>
          </div>
          <div className="pic">
            <a href="https://artur-shapiro-todo-app.netlify.app/">
              <img src={require("./img/todo.jpg")} alt="todo-img" />
            </a>
          </div>
        </div>
        {/* *********************** */}
        <div className="p-container">
          <div className="info">
            <h4>Flower Shop</h4>
             
            <p>This project was inspired by a friend, taught me rather quickly on the importance of design. I ended up redoing a lot of my work multiple times just because I didn't know what I wanted, and some parts I had to scrap and start all over just because I wasn't satisfied.</p>
            <p>I learned a lot from my mistakes in making the site. But in the end, I deciding to drop it move on to another project.</p>
            <span>Build using React, React-Router, JavaScript, HTML, SCSS, Photoshop</span>
          </div>
          <div className="pic">
            <a href="https://artur-shapiro-flower-shop.netlify.app/">
              <img src={require("./img/flower.jpg")} alt="todo-img" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
