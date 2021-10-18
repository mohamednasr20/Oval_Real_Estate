import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import howWorksBg from '../../../../assets/howWorks.png';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const StepContent = ({
  obj,
  activeStep,
  handleBack,
  handleNext,
  steps,
  handleReset,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.imgBg} src={howWorksBg} alt="img-background" />
      <Paper className={classes.content}>
        <Typography variant="h5">{obj.header}</Typography>
        <Typography variant="subtitle1">{obj.content}</Typography>
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}
            className={classes.button}
          >
            Back
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
            className={classes.button}
          >
            {activeStep === steps.length - 1 ? 'Rest' : 'Next'}
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default StepContent;
