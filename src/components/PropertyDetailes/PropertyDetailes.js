import React from 'react';
import PriceHistory from './PriceHistory/PriceHistory';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import CheckIcon from '@material-ui/icons/Check';

import useStyles from './styles';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const PropertyDetailes = () => {
  const classes = useStyles();
  const property = useSelector((state) => state.globalState.selectedProperty);

  const FeaturTags = (features) =>
    features.map(
      (feature, i) =>
        i < 9 && (
          <Grid item xs={4} className={classes.flex} key={feature}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typography variant="subtitle2">
              {feature.split('_').join(' ').toUpperCase()}
            </Typography>
          </Grid>
        )
    );

  return (
    <Container className={classes.root}>
      {property?.address ? (
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Typography
              variant="subtitle2"
              gutterBottom
              color="textPrimary"
            >{`${property?.address.city} ${property?.address.state_code} ${property?.address.postal_code}`}</Typography>

            <Typography variant="h5">
              {`${property?.address.line} ${property?.address.city} ${property?.address.state_code}`}
            </Typography>

            <div className={classes.flex}>
              <SingleBedIcon />
              <Typography
                variant="subtitle1"
                color="textPrimary"
              >{`${property?.beds}bd`}</Typography>
              <BathtubIcon />
              <Typography
                variant="subtitle1"
                color="textPrimary"
              >{`${property?.baths}ba`}</Typography>
              <SquareFootIcon />
              <Typography
                variant="subtitle1"
                color="textPrimary"
              >{`${property?.building_size.size}${property?.building_size.units}`}</Typography>
            </div>

            <Typography style={{ marginBottom: 42 }} paragraph variant="body1">
              {property?.description}
            </Typography>
            <Divider />
            <Typography
              style={{ marginTop: 42 }}
              variant="h6"
            >{`Home Detailes For  ${property?.address.line}`}</Typography>
            <Grid container spacing={2} className={classes.detalies}>
              <Grid item xs={4} className={classes.flex}>
                <CheckIcon fontSize="small" className={classes.checkIcon} />
                <Typography variant="subtitle2">
                  {property?.prop_type.split('_').join(' ').toUpperCase()}
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.flex}>
                <CheckIcon fontSize="small" className={classes.checkIcon} />
                <Typography variant="subtitle2">
                  {`${property?.building_size.size}/${property?.building_size.units}`}
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.flex}>
                <CheckIcon fontSize="small" className={classes.checkIcon} />
                <Typography variant="subtitle2">
                  {`BUILT IN: ${property?.year_built}`}
                </Typography>
              </Grid>

              {FeaturTags(property?.feature_tags)}
            </Grid>
            <Divider />
            {property?.agents.length && (
              <div>
                <Typography variant="h6">Agents by</Typography>
                <div className={classes.flex}>
                  <Avatar
                    alt="agent_photo"
                    src={property.agents[0]?.photo?.href}
                  />
                  <Typography
                    variant="subtitle2"
                    style={{ margin: 8, marginRight: 'auto' }}
                  >
                    {property.agents[0]?.name}
                  </Typography>

                  <Button color="secondary">
                    Contact <ArrowForwardIosIcon fontSize="small" />
                  </Button>
                </div>
              </div>
            )}
            <Divider />
            <Typography variant="h6">Price trend history</Typography>
            <PriceHistory events={property.property_history} />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6">{`$${property.price}`}</Typography>
            <div className={classes.flex}>
              <Typography
                variant="subtitle2"
                style={{ marginRight: 'auto', marginTop: 8 }}
              >{`EST.Mortagage $${property?.mortgage.estimate.monthly_payment}/mo`}</Typography>
              <Link href={property?.mortgage.rates_url} target="_blank">
                Estimation
              </Link>
            </div>
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </Container>
  );
};

export default PropertyDetailes;
