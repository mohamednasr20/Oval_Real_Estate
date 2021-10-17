import React from 'react';
import Container from '@material-ui/core/Container';
import Typograpy from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import adventagesBg from '../../../assets/adventages.png';

import useStyles from './styles';

const Adventages = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <div className={classes.flexContainer}>
        <div>
          <Typograpy className={classes.subtitle} variant="subtitle2">
            ADVENTAGES
          </Typograpy>
          <Typograpy variant="h4">Why Oval is better</Typograpy>
          <Paper className={classes.comparison}>
            <Grid container>
              <Grid item xs={5}>
                <Typograpy className={classes.comparisonHeading} variant="h6">
                  Traditional home sale
                </Typograpy>
                <div className={classes.traditional}>
                  <Typograpy variant="subtitle1">
                    Risk of buyer financing fall-through
                  </Typograpy>
                  <CloseIcon fontSize="small" className={classes.closeIcon} />
                </div>
                <div className={classes.traditional}>
                  <Typograpy variant="subtitle1">
                    Hours of prep work and home showing
                  </Typograpy>
                  <CloseIcon fontSize="small" className={classes.closeIcon} />
                </div>
                <div className={classes.traditional}>
                  <Typograpy variant="subtitle1">
                    Manage repairs yourself
                  </Typograpy>
                  <CloseIcon fontSize="small" className={classes.closeIcon} />
                </div>
                <div className={classes.traditional}>
                  <Typograpy variant="subtitle1">
                    Uncertain closing timeline
                  </Typograpy>
                  <CloseIcon fontSize="small" className={classes.closeIcon} />
                </div>
              </Grid>
              <Grid item xs={2}>
                <div className={classes.vs}>VS</div>
                <div className={classes.line}></div>
              </Grid>
              <Grid item xs={5}>
                <Typograpy className={classes.comparisonHeading} variant="h6">
                  Selling to <span className={classes.logoSpan}>Oval</span>
                </Typograpy>
                <div className={classes.oval}>
                  <CheckIcon fontSize="small" className={classes.checkIcon} />
                  <Typograpy variant="subtitle1">
                    Competitive cash offer in 24 hours
                  </Typograpy>
                </div>
                <div className={classes.oval}>
                  <CheckIcon fontSize="small" className={classes.checkIcon} />
                  <Typograpy variant="subtitle1">
                    No listing, prep work, or showing
                  </Typograpy>
                </div>
                <div className={classes.oval}>
                  <CheckIcon fontSize="small" className={classes.checkIcon} />
                  <Typograpy variant="subtitle1">
                    Skip the repair work and deduct the costs
                  </Typograpy>
                </div>
                <div className={classes.oval}>
                  <CheckIcon fontSize="small" className={classes.checkIcon} />
                  <Typograpy variant="subtitle1">
                    chose any close date from 10-60 days
                  </Typograpy>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <div className={classes.facts}>
            <Typograpy variant="h3">485,091+</Typograpy>
            <Typograpy variant="inherit">HOME AVAILABLE</Typograpy>
            <Typograpy variant="subtitle2">
              Every 60 seconds. a homeowner requests an offer from Oval
            </Typograpy>
          </div>
        </div>
      </div>

      <img className={classes.shapeBg} src={adventagesBg} alt="background" />
    </Container>
  );
};

export default Adventages;
