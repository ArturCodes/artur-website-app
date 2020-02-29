import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Front from "./components/front/front"
import About from "./components/about/about"
import Portfolio from "./components/portfolio/portfolio"
import Contact from "./components/contact/contact"

function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/">
            <Front />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
