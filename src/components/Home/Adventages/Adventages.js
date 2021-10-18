import React from 'react';
import Comparison from './Comparison/Comparison';
import Container from '@material-ui/core/Container';
import Typograpy from '@material-ui/core/Typography';
import adventagesBg from '../../../assets/adventages.png';
import adventagesBgMobile from '../../../assets/adventagesMobile.png';
import adventagesBgTablet from '../../../assets/adventagesTablet.png';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import useStyles from './styles';

const Adventages = () => {
  const classes = useStyles();
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const tabletScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Container className={classes.root}>
      <div>
        <Typograpy className={classes.subtitle} variant="subtitle2">
          ADVENTAGES
        </Typograpy>
        <Typograpy variant="h4">Why Oval is better</Typograpy>
        <Comparison />
        <div className={classes.facts}>
          <Typograpy variant="h3">485,091+</Typograpy>
          <Typograpy variant="inherit">HOME AVAILABLE</Typograpy>
          <Typograpy variant="subtitle2">
            Every 60 seconds. a homeowner requests an offer from Oval
          </Typograpy>
        </div>
      </div>

      <img
        className={classes.shapeBackground}
        src={
          lgScreen
            ? adventagesBg
            : tabletScreen
            ? adventagesBgTablet
            : adventagesBgMobile
        }
        alt="background"
      />
    </Container>
  );
};

export default Adventages;
