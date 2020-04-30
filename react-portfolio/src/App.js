import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Blog from "./components/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
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
