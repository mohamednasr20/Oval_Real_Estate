import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import PropertyDetailes from './components/PropertyDetailes/PropertyDetailes';
import { theme } from './theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/search" exact>
            <SearchResults />
          </Route>
          <Route path="/search/:id" exact>
            <PropertyDetailes />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
