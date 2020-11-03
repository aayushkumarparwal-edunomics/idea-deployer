import React from "react";

const ideas = [
  {
    title: "Idea Title Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
    upVote: "12",
    downVote: "8",
    like: "50",
    comments: [],
    effortRating: "4.7",
    impactRating: "3.5",
  },
];
function IdeaCard() {
  return (
    <div>
      {ideas.map((idea) => {
        <div>
          <h6>{idea.title}</h6>
          <p>{idea.description}</p>
          <div>
            <span>{idea.upVote}</span>
            <span>{idea.downVote}</span>
            <span>{idea.like}</span>
            <span>{idea.effortRating}</span>
            <span>{idea.impactRating}</span>
          </div>
        </div>;
      })}
    </div>
  );
}

export default IdeaCard;
