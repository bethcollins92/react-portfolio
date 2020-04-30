import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
