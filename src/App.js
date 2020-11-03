import React from "react";
import Challenge from "./Pages/Challenge";
import Idea from "./Pages/Idea";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChallengeDetails from "./Pages/ChallengeDetails";

function App() {
  return (
    <div className="App">
      <h2>Home</h2>
      <Router>
        <div>
          <Link to="/challenges">Challenges</Link>
          <br />
          <Link to="/ideas">Ideas</Link>
          <br />
          <Link to="/challenge-details">Challenge Details</Link>
          <Switch>
            <Route path="/challenges" exact component={Challenge} />
            <Route path="/ideas" component={Idea} />
            <Route path="/challenge-details" component={ChallengeDetails} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
