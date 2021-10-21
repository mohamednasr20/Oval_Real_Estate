import React from 'react';
import SearchField from '../../SearchField/SearchField';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import lgHeader from '../../../assets/header.png';
import tabletHeader from '../../../assets/headerTablet.png';
import mobileHeader from '../../../assets/headerMobile.png';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const lgScreen = useMediaQuery(theme.breakpoints.up('md'));
  const tabletScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <div className={classes.TextWrapper}>
          <Typography
            className={`${classes.subHeading} ${classes.heading}`}
            variant="h4"
            color="primary"
          >
            Find out a place
          </Typography>

          <Typography
            className={`${classes.mainHeading} ${classes.heading}`}
            variant="h4"
            color="primary"
          >
            You'll love to live
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2">
            With the most complete source of homes for sale & real estate near
            you
          </Typography>
          <SearchField />
        </div>
      </Container>

      <img
        className={classes.img}
        src={lgScreen ? lgHeader : tabletScreen ? tabletHeader : mobileHeader}
        alt="header_img"
      />
    </div>
  );
};

export default Header;
