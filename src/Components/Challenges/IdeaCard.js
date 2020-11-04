import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider";
import Typography from '@material-ui/core/Typography';
import "../../CSS/index.css";
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
const useStyles = makeStyles({
  root: {
    width: 100,
  },
});

function valuetext(value) {
  return `${value}°C`;
}
function IdeaCard() {
  const classes = useStyles();
  return (
    <div>
      {ideas.map((idea) => (
        <div>
          <h6>{idea.title}</h6>
          <p>{idea.description}</p>
          <div>
            <span className="cards-footer">{idea.upVote}</span>
            <span className="cards-footer">{idea.downVote}</span>
            <span className="cards-footer">{idea.like}</span>
            <span className={"cards-footer"+classes.root}>
         <div className={classes.root}>
         <Typography id="discrete-slider" gutterBottom>
        Impact
      </Typography>
      <Slider
        defaultValue={30}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0.0}
        max={5.0}
      />
         </div>
            </span>
            <span className="cards-footer">{idea.impactRating}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IdeaCard;