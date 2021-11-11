import React from 'react';
import StepContent from './StepContent/StepContent';
import { getSteps, getStepContent } from './stepsContentHelper';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './styles';

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

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography className={classes.subtitle} variant="subtitle2">
        HOW IT WORKS
      </Typography>
      <Typography className={classes.header} variant="h4">
        Peace of mind. At every step of your journey home.
      </Typography>
      <div className={classes.stepperWrapper}>
        <Stepper
          alternativeLabel={isMobile ? false : true}
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
