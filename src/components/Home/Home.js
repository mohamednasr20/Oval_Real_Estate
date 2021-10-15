import React from 'react';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
  return (
    <Container>
      <Header />
      <Services />
    </Container>
  );
};

export default Home;
