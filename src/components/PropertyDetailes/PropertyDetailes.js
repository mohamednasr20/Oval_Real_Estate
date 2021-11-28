import React, { useEffect } from 'react';
import PropertyCarsouel from './PropertyCarsouel/PropertyCarsouel';
import PriceHistory from './PriceHistory/PriceHistory';
import ScheduleForm from './ScheduleForm/ScheduleForm';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubIcon from '@material-ui/icons/Bathtub';
import SquareFootIcon from '@material-ui/icons/SquareFoot';
import CheckIcon from '@material-ui/icons/Check';

import { getProperty } from '../../actions/globalState';

import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import useStyles from './styles';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const PropertyDetailes = () => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const { id } = useParams();

  const property = useSelector((state) => state.globalState.selectedProperty);
  const searchType = useSelector((state) => state.globalState.searchType);
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const FeaturTags = (features) =>
    features?.map(
      (feature, i) =>
        i < 9 && (
          <Grid item xs={6} sm={4} className={classes.flex} key={feature}>
            <CheckIcon fontSize="small" className={classes.checkIcon} />
            <Typography variant="subtitle2">
              {feature.split('_').join(' ').toUpperCase()}
            </Typography>
          </Grid>
        )
    );

  useEffect(() => {
    dispatch(getProperty(id));
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        {property?.address ? (
          <>
            <PropertyCarsouel photos={property?.photos} />
            <Grid container spacing={4}>
              <Grid className={classes.main} item xs={12} md={8}>
                <Typography
                  className={classes.lead}
                  variant="subtitle2"
                  gutterBottom
                  color="textPrimary"
                >{`${property?.address.city} ${property?.address.state_code} ${property?.address.postal_code}`}</Typography>

                <Typography variant="h5" color="textSecondary">
                  {`${property?.address.line} ${property?.address.city} ${property?.address.state_code}`}
                </Typography>

                <div className={classes.flex} style={{ marginBottom: 18 }}>
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

                <Typography
                  className={classes.lead}
                  style={{ marginBottom: 42 }}
                  paragraph
                  variant="body1"
                >
                  {property?.description}
                </Typography>
                <Divider />
                {isTablet && <ScheduleForm property={property} />}
                <div className={classes.pSection}>
                  <Typography
                    className={classes.secondaryHeader}
                    style={{ marginTop: 42 }}
                    variant="h6"
                  >{`Home Detailes For  ${property?.address.line}`}</Typography>
                  <Grid container spacing={2} className={classes.detalies}>
                    <Grid item xs={6} sm={4} className={classes.flex}>
                      <CheckIcon
                        fontSize="small"
                        className={classes.checkIcon}
                      />
                      <Typography variant="subtitle2">
                        {property?.prop_type.split('_').join(' ').toUpperCase()}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} className={classes.flex}>
                      <CheckIcon
                        fontSize="small"
                        className={classes.checkIcon}
                      />
                      <Typography variant="subtitle2">
                        {`${property?.building_size.size}/${property?.building_size.units}`}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} className={classes.flex}>
                      <CheckIcon
                        fontSize="small"
                        className={classes.checkIcon}
                      />
                      <Typography variant="subtitle2">
                        {`BUILT IN: ${property?.year_built}`}
                      </Typography>
                    </Grid>

                    {FeaturTags(property?.feature_tags)}
                  </Grid>
                </div>

                <Divider />
                <div className={classes.pSection}>
                  {property?.agents.length && (
                    <div>
                      <Typography
                        className={classes.secondaryHeader}
                        variant="h6"
                      >
                        Agents by
                      </Typography>
                      <div style={{ marginTop: 16 }} className={classes.flex}>
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
                </div>

                <Divider />

                {searchType !== 'list-for-rent' && (
                  <div className={classes.pSection}>
                    <Typography
                      className={classes.secondaryHeader}
                      variant="h6"
                    >
                      Price trend history
                    </Typography>
                    <PriceHistory events={property.property_history} />
                  </div>
                )}
              </Grid>
              {isDesktop && (
                <Grid item xs={3}>
                  <div>
                    <ScheduleForm property={property} />
                  </div>
                </Grid>
              )}
            </Grid>
          </>
        ) : (
          <div className={classes.loading}>
            <CircularProgress />
          </div>
        )}
      </Container>
    </div>
  );
};

export default PropertyDetailes;
