import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
      <Card className={classes.content}>
        <CardContent>
          <Typography
            className={classes.cardHeader}
            variant="h5"
            color="textSecondary"
          >
            {obj.header}
          </Typography>
          <Typography variant="subtitle2">{obj.content}</Typography>
        </CardContent>

        <div className={classes.cardAction}>
          <div>
            <span className={classes.activeStep}>{activeStep + 1}/4</span>{' '}
            {steps[activeStep]}
          </div>

          <Button
            className={classes.cardBtn}
            color="secondary"
            onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
          >
            {activeStep === steps.length - 1 ? 'Reset' : 'Next'}
            {activeStep < steps.length - 1 && (
              <ArrowForwardIosIcon fontSize="small" />
            )}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default StepContent;
