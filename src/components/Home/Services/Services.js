import React from 'react';
import ServicesCard from './ServicesCard/ServicesCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useStyles from './styles';

const Services = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography variant="subtitle1">OUR SERVICES</Typography>
      <Typography
        sx={{
          fontSize: { xs: 26, sm: 32, lg: 36 },
          fontWeight: 600,
          marginTop: 2,
          lineHeight: 1.35,
        }}
        variant="h4"
      >
        We have the most listings and constant <br /> updates. So you'll never
        miss out.
      </Typography>
      <Grid container spacing={2} sx={{ marginY: 4 }}>
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
