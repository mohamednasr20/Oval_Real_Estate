import React from 'react';
import ServicesCard from './ServicesCard/ServicesCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';

const Services = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography className={classes.caption} variant="subtitle1">
        OUR SERVICES
      </Typography>
      <Typography
        className={classes.heading}
        variant="h4"
        color="textSecondary"
      >
        We have the most listings and constant <br /> updates. So you'll never
        miss out.
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <ServicesCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesCard />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ServicesCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
