import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from "@material-ui/core/Slider";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import "../../CSS/index.css";
const ideas = [
  {
    title: "Idea Title Here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.",
    upVote: "12",
    downVote: "8",
    comments: [],
    effortRating: "4.7",
    impactRating: "3.5",
  },
];
const useStyles = makeStyles({
  root: {
    width: 150,
  },
});

function valuetext(value) {
  return `${value}`;
}
function IdeaCard() {
  const classes = useStyles();
  const [impact, setImpact] = React.useState(false);
  const [effort , setEffort] = React.useState(false);
  const handleChangeImpact = () => {
    setImpact((prev) => !prev);
  };
  const handleChangeEffort = () => {
    setEffort((prev) => !prev);
  };
  return (
    <div>
      {ideas.map((idea) => (
        <div>
            <h6>{idea.title}</h6>
            <p>{idea.description}</p>
          <div>
            <span className="cards-footer">Upvote {idea.upVote}</span>
            <span className="cards-footer">{idea.downVote}</span>
           
            
         <div className={classes.root}>
           <Button
          size="small"
          id="discrete-slider"
          checked={impact}
          onClick={handleChangeImpact}
        >
          Impact {idea.impactRating}
        </Button>
        <div>
          <Collapse in={impact}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={0.5}
              marks
              min={0.0}
              max={5.0}
            />
          </Collapse>
         </div>
         </div>  
           
          
           
             <div className={classes.root}>
           <Button
          size="small"
          id="discrete-slider"
          checked={effort}
          onClick={handleChangeEffort}
        >
          Effort {idea.effortRating}
        </Button>
        <div>
          <Collapse in={effort}>
            <Slider
              defaultValue={0}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={0.5}
              marks
              min={0.0}
              max={5.0}
            />
          </Collapse>
         </div>
         </div> 
        
          </div>
        </div>
      ))}
    </div>
  );
}

export default IdeaCard;