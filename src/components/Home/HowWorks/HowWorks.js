import React from 'react';
import StepContent from './StepContent/StepContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

function getSteps() {
  return [
    'Discover House',
    'Schedule to visit',
    'Hassle-free purchase',
    'Buyback guarantee',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return {
        header: 'Find a home just right for you',
        content:
          'Oval owns hunderds of homes for sale near you. See homes on the market, or get a sneak peek at those that have yet to hit the market',
      };
    case 1:
      return {
        header: 'Schedule a tour process',
        content:
          'The process of scheduling a tour can now happen in a few seconds, After you submit your information, you’ll be assigned a local real estate agent, who will reach out to you to confirm your tour time and format.',
      };
    case 2:
      return {
        header: 'Determine Your Wants and Needs',
        content:
          'Before you start looking at homes for sale, you need to determine your wants and needs. Start a list and carefully assess the kind of home you’re interested in,',
      };
    case 3:
      return {
        header: 'We stands behind homes we sell',
        content:
          'Unlike any other real estate company, Oval stands behind the value of the properties we sell. The Oval 100% Money Back Guarantee helps you buy with confidence. If an Oval homebuyer of a guaranteed home listed by Oval is not satisfied, we will buy back the home for 100% of its purchase price.',
      };
    default:
      return { header: 'Some thing went wrong', content: '' };
  }
}

const HowWorks = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container className={classes.root}>
      <Typography className={classes.subtitle} variant="subtitle2">
        HOW IT WORKS
      </Typography>
      <Typography className={classes.header} variant="h4">
        Peace of mind. At every step of your journey home.
      </Typography>
      <div className={classes.stepperWrapper}>
        <Stepper
          alternativeLabel
          orientation={isMobile ? 'vertical' : 'horizontal'}
          activeStep={activeStep}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div className={classes.stepContentWrapper}>
          <StepContent
            obj={getStepContent(activeStep)}
            activeStep={activeStep}
            handleBack={handleBack}
            handleNext={handleNext}
            handleReset={handleReset}
            steps={steps}
          />
        </div>
      </div>
    </Container>
  );
};

export default HowWorks;
