import React from 'react';
import SearchField from '../../SearchField/SearchField';
import Box from '@mui/material/Box';
import {
  MainHeading,
  SecondaryHeading,
  Subtitle,
  TextWrapper,
  ImageBox,
} from './styles';
import lgHeader from '../../../assets/header.png';
import tabletHeader from '../../../assets/headerTablet.png';
import mobileHeader from '../../../assets/headerMobile.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  const lgScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const tabletScreen = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Box sx={{ position: 'relative' }}>
      <TextWrapper>
        <SecondaryHeading variant="h4" color="primary">
          Find out a place
        </SecondaryHeading>
        <MainHeading variant="h4" color="primary">
          You'll love to live
        </MainHeading>
        <Subtitle variant="subtitle2">
          With the most complete source of homes for sale & real estate near you
        </Subtitle>
        <SearchField />
      </TextWrapper>
      <ImageBox>
        <img
          style={{ width: '100%', maxHeight: '100%' }}
          src={lgScreen ? lgHeader : tabletScreen ? tabletHeader : mobileHeader}
          alt="header_img"
        />
      </ImageBox>
    </Box>
  );
};

export default Header;
