import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import notFoundImage from '../../../../../assets/noImageFound.png';
import useStyles from './styles';

const MapCard = ({ selectedProperty }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            selectedProperty.photo ? selectedProperty.photo : notFoundImage
          }
          title="property_image"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.subtitle} variant="h6">
            {selectedProperty?.price}
          </Typography>
          <div className={classes.flex}>
            <SingleBedIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {selectedProperty.beds ? `${selectedProperty?.beds}bd` : 'studio'}
            </Typography>
            <BathtubIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {`${selectedProperty?.baths}ba`}
            </Typography>
            <SquareFootIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {selectedProperty.sqft_raw
                ? `${selectedProperty?.sqft_raw}sqft`
                : '0'}
            </Typography>
          </div>
          <Typography variant="subtitle1">
            {selectedProperty?.address_new.line}
          </Typography>
          <Typography variant="subtitle1">{`${selectedProperty?.address_new.city}, ${selectedProperty?.address_new.state}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MapCard;
