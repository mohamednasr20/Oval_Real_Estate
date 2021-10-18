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
        header: 'find home just rigth for you',
        content:
          'Oval owns hunderds of homes for sale near you. See homes on the market, or get a sneak peek at those that have yet to hit the market',
      };
    case 1:
      return {
        header: 'What is an ad group anyways?',
        content: 'no thing yet',
      };
    case 2:
      return {
        header: 'This is the bit I really care about!',
        content: 'no thing too',
      };
    case 3:
      return { header: 'this is fourth step', content: 'no too' };
    default:
      return { header: 'Unknown step', content: '' };
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
    <Container>
      <Typography variant="caption">HOW IT WORKS</Typography>
      <Typography variant="h4">
        Peace of mind. At every step of your journey home.
      </Typography>
      <div className={classes.root}>
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
        <div>
          <div>
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
      </div>
    </Container>
  );
};

export default HowWorks;
