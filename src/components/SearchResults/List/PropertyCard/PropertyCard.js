import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import useStyles from './styles';

const PropertyCard = ({ showMap, isFavorite, isNew = true }) => {
  const classes = useStyles(showMap);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://ap.rdcpix.com/4b045179835598550e912824f9ea76b3l-m746795374x.jpg"
          title="property_image"
        />
        <CardContent>
          <Typography className={classes.subtitle} variant="h6">
            $124.000
          </Typography>
          <div className={classes.flex}>
            <SingleBedIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              4bd
            </Typography>
            <BathtubIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              3ba
            </Typography>
            <SquareFootIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              1020sqft
            </Typography>
          </div>
          <Typography variant="subtitle1">8777 19th Ave</Typography>
          <Typography variant="subtitle1">Minnesota, Atlanta, GA</Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.favoriteIcon}>
        {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
      {isNew && <Chip className={classes.chip} label="NEW" />}
    </Card>
  );
};

export default PropertyCard;
