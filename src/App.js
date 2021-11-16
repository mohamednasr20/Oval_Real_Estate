import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import PropertyDetailes from './components/PropertyDetailes/PropertyDetailes';
import Auth from './components/Auth/Auth';
import './firebase/config';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch } from 'react-redux';
import { handleUserState } from './actions/auth';
import { theme } from './theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      dispatch(handleUserState(user))
    );
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Auth />
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
