import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
//import Paper from "@material-ui/core/Paper";
//import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import TopContributors from "../Components/Challenges/TopContributors";
import { Row, Col } from "react-bootstrap";
import IdeasBar from "../Components/Challenges/IdeasBar";
import PostIdea from '../Components/Idea/PostIdea';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 200,
    flexGrow: 1,
    margin: "auto",
  },
  //   header: {
  //     display: "flex",
  //     alignItems: "center",
  //     height: 50,
  //     paddingLeft: theme.spacing(4),
  //     backgroundColor: theme.palette.background.default,
  //   },
  img: {
    height: 100,
    display: "block",
    maxWidth: 200,
    overflow: "hidden",
    width: "100%",
  },
}));
function ChallengeDetails() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div>
    
      <h4 align="left">Challenge Title</h4>
      <Row>
         <Col lg="9" md="9" sm="12">
         <div>
        <h5>Description</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat nam at lectus urna duis convallis. Donec et odio pellentesque diam volutpat commodo sed egestas egestas. Dui nunc mattis enim ut tellus elementum sagittis. Sodales neque sodales ut etiam sit amet nisl. Turpis in eu mi bibendum neque. A diam maecenas sed enim ut. Et egestas quis ipsum suspendisse ultrices. Orci ac auctor augue mauris augue neque gravida in. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate. Non enim praesent elementum facilisis leo. Enim nec dui nunc mattis enim ut tellus. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Scelerisque purus semper eget duis.</p>
      </div>
         </Col>
         <Col lg="3" md="3" sm="12"><div className={classes.root}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img
                  className={classes.img}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              style={{outline: "none"}}
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              style={{outline: "none"}}
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              
            </Button>
          }
        />
      </div></Col>
      </Row>
      
      

      <Row>
        <Col lg="9" md="9" sm="12">
         <IdeasBar />
         </Col>
        <Col lg="3" md="3" sm="12">
          <TopContributors />
           <PostIdea/>
        </Col>
      </Row>
      
    </div>
  );
}

export default ChallengeDetails;
