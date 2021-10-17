import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import Services from './Services/Services';
import Adventages from './Adventages/Adventages';

const Home = () => {
  return (
    <Container>
      <Header />
      <Services />
      <Adventages />
    </Container>
  );
};

export default Home;
