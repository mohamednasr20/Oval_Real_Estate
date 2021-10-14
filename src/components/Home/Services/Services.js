import React from 'react';
import ServicesCard from './ServicesCard/ServicesCard';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './styles';
import buyIcon from '../../../assets/serviceBuy.png';
import sellIcon from '../../../assets/serviceSell.png';
import rentIcon from '../../../assets/serviceRent.png';

const services = [
  {
    icon: buyIcon,
    header: 'Buy a home',
    text: "Find your place with an immerseve phote experince and the most listings, includes things you won't find any where",
  },
  {
    icon: sellIcon,
    header: 'Sell a home',
    text: "Whether you sell with new oval offers or take onther approach, we'll help you navigate the path to a successfull sale.",
  },
  {
    icon: rentIcon,
    header: 'Rent a home',
    text: "We're creating a seamless online experience from shopping on the largest rental network to applying to paying rent.",
  },
];

const Services = () => {
  const renderServiceCards = () =>
    services.map((service) => (
      <Grid item xs={12} sm={4} key={service.header}>
        <ServicesCard
          icon={service.icon}
          header={service.header}
          text={service.text}
        />
      </Grid>
    ));

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
        {renderServiceCards()}
      </Grid>
    </Container>
  );
};

export default Services;
