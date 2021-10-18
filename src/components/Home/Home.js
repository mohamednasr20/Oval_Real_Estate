import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import Services from './Services/Services';
import Adventages from './Adventages/Adventages';
import HowWorks from './HowWorks/HowWorks';

const Home = () => {
  return (
    <Container>
      <Header />
      <Services />
      <Adventages />
      <HowWorks />
    </Container>
  );
};

export default Home;
