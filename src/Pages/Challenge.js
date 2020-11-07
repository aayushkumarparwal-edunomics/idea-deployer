import React from "react";

// local file imports
import "../CSS/index.css";
import ChallengeList from "../Components/Challenges/ChallengeList";
import PostChallenge from "../Components/Challenges/PostChallenge";

function Challenge() {
  
  return (
    <div>
      <div className="table-margin">
        <ChallengeList />

      </div>
       <PostChallenge/>
    </div>
  );
}

export default Challenge;
