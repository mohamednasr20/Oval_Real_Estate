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
import notFoundImage from '../../../../assets/noImageFound.png';
import { updateUserDocument } from '../../../../firebase/user';
import { handleShowAuthModal } from '../../../../actions/globalState';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import useStyles from './styles';

const PropertyCard = ({ showMap, property }) => {
  const classes = useStyles(showMap);
  const history = useHistory();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);
  const userDocument = useSelector((state) => state.userState.userDocument);

  const isFavorite = userDocument?.savedHomes?.find(
    (h) => h.property_id === property.property_id
  );

  const handleSaveProperty = async () => {
    if (!user) {
      dispatch(handleShowAuthModal(true));
    } else {
      const actionType = isFavorite ? 'remove' : 'add';
      await updateUserDocument(user, 'savedHomes', property, actionType);
    }
  };

  return (
    <Card
      className={classes.root}
      onClick={() => history.push(`/search/${property.property_id}`)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={property.photo ? property.photo : notFoundImage}
          title="property_image"
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.subtitle} variant="h6">
            {property?.price}
          </Typography>
          <div className={classes.flex}>
            <SingleBedIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {property.beds ? `${property?.beds}bd` : 'studio'}
            </Typography>
            <BathtubIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {`${property?.baths}ba`}
            </Typography>
            <SquareFootIcon />
            <Typography className={classes.subtitle} variant="subtitle1">
              {property.sqft_raw ? `${property?.sqft_raw}sqft` : '0'}
            </Typography>
          </div>
          <Typography variant="subtitle1">
            {property?.address_new.line}
          </Typography>
          <Typography variant="subtitle1">{`${property?.address_new.city}, ${property?.address_new.state}`}</Typography>
        </CardContent>
      </CardActionArea>
      <div
        className={classes.favoriteIcon}
        onClick={(e) => {
          e.stopPropagation();
          handleSaveProperty();
        }}
      >
        {isFavorite ? (
          <FavoriteIcon fontSize="large" className={classes.iconRed} />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
      </div>
      {property.is_new_construction && (
        <Chip className={classes.chip} label="NEW" />
      )}
    </Card>
  );
};

export default PropertyCard;
