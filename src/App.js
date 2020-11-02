import React from "react";
import Challenge from "./Pages/Challenge";
import Idea from "./Pages/Idea";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <h2>Home</h2>
      <Router>
        <div>
          <Link to="/challenges">Challenges</Link>
          <br />
          <Link to="/ideas">Ideas</Link>
          <Route path="/challenges" component={Challenge} />
          <Route path="/ideas" component={Idea} />
        </div>
      </Router>
    </div>
  );
}

export default App;
