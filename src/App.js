import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <Home />
    </React.Fragment>
  );
};

export default App;
