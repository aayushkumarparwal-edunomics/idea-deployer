import React from "react";
import Challenge from "./Pages/Challenge";
import Idea from "./Pages/Idea";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ChallengeDetails from "./Pages/ChallengeDetails";
import ChallengePipeline from "./Pages/ChallengePipeline";

function App() {
  return (
    <div className="App">
      
      <Router>
        <div>
          <Link to="/challenges">Challenges</Link>
          <br />
          <Link to="/ideas">Ideas</Link>
          <br />
          <Link to="/challenge-details">Challenge Details</Link>
          <br/>
          <Link to="/challenge-pipeline">Challenge Pipeline</Link>
          <Switch>
            <Route path="/challenges" exact component={Challenge} />
            <Route path="/ideas" component={Idea} />
            <Route path="/challenge-details" component={ChallengeDetails} />
            <Route path="/challenge-pipeline" component={ChallengePipeline}/> 
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
