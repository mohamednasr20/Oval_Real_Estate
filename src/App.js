import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import SearchResults from './components/SearchResults/SearchResults';
import PropertyDetailes from './components/PropertyDetailes/PropertyDetailes';
import Auth from './components/Auth/Auth';
import SavedHomes from './components/SavedHomes/SavedHomes';
import SavedSearches from './components/SavedSearches/SavedSearches';
import './firebase/config';
import { db } from './firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { handleUserState, handleUserDocument } from './actions/auth';
import { theme } from './theme';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const user = useSelector((state) => state.userState.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      dispatch(handleUserState(user))
    );

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const unsub = () => {
      if (user) {
        onSnapshot(doc(db, 'users', user.uid), (doc) => {
          if (doc.exists) {
            const documentData = doc.data();
            dispatch(handleUserDocument(documentData));
          }
        });
      }
    };
    unsub();

    // eslint-disable-next-line
  }, [user]);
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
          <Route path="/savedHomes">
            <SavedHomes />
          </Route>
          <Route>
            <SavedSearches />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
