import React from "react";
import PostIdea from '../Components/Idea/PostIdea';
import IdeasList from "../Components/Idea/IdeasList";



// Main idea component
function Idea() {
  
  return (
    <div>
      <h5>Ideas Here</h5>
      <div className="table-margin">
        <IdeasList />
      </div>
      <PostIdea/>
    </div>
  );
}

export default Idea;
