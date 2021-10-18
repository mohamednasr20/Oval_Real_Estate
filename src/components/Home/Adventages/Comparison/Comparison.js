import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typograpy from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import useStyles from './styles';

const Comparison = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.comparison}>
      <Grid container>
        <Grid item xs={12} lg={5}>
          <Typograpy className={classes.comparisonHeading} variant="h6">
            Traditional home sale
          </Typograpy>
          <div className={classes.traditional}>
            <Typograpy variant="subtitle2">
              Risk of buyer financing fall-through
            </Typograpy>
            <CloseIcon fontSize="small" className={classes.closeIcon} />
          </div>
          <div className={classes.traditional}>
            <Typograpy variant="subtitle2">
              Hours of prep work and home showing
            </Typograpy>
            <CloseIcon fontSize="small" className={classes.closeIcon} />
          </div>
          <div className={classes.traditional}>
            <Typograpy variant="subtitle2">Manage repairs yourself</Typograpy>
            <CloseIcon fontSize="small" className={classes.closeIcon} />
          </div>
          <div className={classes.traditional}>
            <Typograpy variant="subtitle2">
              Uncertain closing timeline
            </Typograpy>
            <CloseIcon fontSize="small" className={classes.closeIcon} />
          </div>
        </Grid>
        <Grid item xs={12} lg={2}>
          <div className={classes.vs}>VS</div>
          <div className={classes.line}></div>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Typograpy className={classes.comparisonHeading} variant="h6">
            Selling to <span className={classes.logoSpan}>Oval</span>
          </Typograpy>
          <div className={classes.oval}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typograpy variant="subtitle2">
              Competitive cash offer in 24 hours
            </Typograpy>
          </div>
          <div className={classes.oval}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typograpy variant="subtitle2">
              No listing, prep work, or showing
            </Typograpy>
          </div>
          <div className={classes.oval}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typograpy variant="subtitle2">
              Skip the repair work and deduct the costs
            </Typograpy>
          </div>
          <div className={classes.oval}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typograpy variant="subtitle2">
              chose any close date from 10-60 days
            </Typograpy>
          </div>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Comparison;
