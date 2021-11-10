import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import useStyles from './styles';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PropertyCarsouel = ({ photos }) => {
  const classes = useStyles();

  return (
    <Carousel className={classes.carousel} responsive={responsive}>
      {photos?.map((photo, i) => (
        <div className={classes.imgDiv} key={i}>
          <img alt="property_img" src={photo?.href} />
        </div>
      ))}
    </Carousel>
  );
};

export default PropertyCarsouel;
