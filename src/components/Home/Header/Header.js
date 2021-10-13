import React from 'react';
import SearchField from '../../SearchField/SearchField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import lgHeader from '../../../assets/header.png';
import tabletHeader from '../../../assets/headerTablet.png';
import mobileHeader from '../../../assets/headerMobile.png';
import useStyles from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const classes = useStyles();
  const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const tabletScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box className={classes.root}>
      <Container sx={{ position: 'relative' }}>
        <Box className={classes.TextWrapper}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 400,
              fontSize: { sx: 32, sm: 42, lg: 48 },
              marginTop: 1,
            }}
            color="primary"
          >
            Find out a place
          </Typography>

          <Typography
            variant="h4"
            color="primary"
            sx={{
              fontWeight: 700,
              fontSize: {
                sx: 32,
                sm: 42,
                lg: 48,
              },
            }}
          >
            You'll love to live
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle2"
            sx={{ fontWeight: 400, fontSize: { xs: 14, sm: 16, lg: 18 } }}
          >
            With the most complete source of homes for sale & real estate near
            you
          </Typography>
          <SearchField sx={{ paddingLeft: 5 }} />
        </Box>
      </Container>

      <img
        className={classes.img}
        src={lgScreen ? lgHeader : tabletScreen ? tabletHeader : mobileHeader}
        alt="header_img"
      />
    </Box>
  );
};

export default Header;
