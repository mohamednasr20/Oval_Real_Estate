import React from 'react';
import { updateUserDocument } from '../../firebase/user';
import {
  handleChangeSearchType,
  onChangeSearchParams,
} from '../../actions/globalState';
import SavedSearch from './SavedSearch/SavedSearch';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const SavedSearches = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const userDocument = useSelector((state) => state.userState.userDocument);
  const user = useSelector((state) => state.userState.user);

  const handleDeleteSearch = async (id) => {
    const deleteSearch = userDocument?.savedSearches.find(
      (search) => search.id === id
    );
    await updateUserDocument(user, 'savedSearches', deleteSearch, 'remove');
  };

  const handleViewListing = (search) => {
    dispatch(handleChangeSearchType(search?.searchType));
    dispatch(onChangeSearchParams(search));
    history.push('/search');
  };

  const renderSavedSearch = () => {
    if (userDocument?.savedSearches?.length) {
      return userDocument.savedSearches.map((search) => (
        <SavedSearch
          key={search.id}
          searchParams={search}
          deleteSearch={() => handleDeleteSearch(search.id)}
          viewListing={() => handleViewListing(search)}
        />
      ));
    }
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h4">Saved Searches</Typography>
      <Typography className={classes.body} variant="body1">
        Get each new listing right away with instant updates , or get a single
        daily email with new listings for the entire day.
      </Typography>
      {userDocument?.savedSearches?.length ? (
        <div>{renderSavedSearch()}</div>
      ) : (
        <div className={classes.flex}>
          <div>
            <Typography variant="body1" className={classes.lead}>
              You haven't saved any searches yet. Save your search criteria for
              easy access.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push('/search')}
            >
              Search Homes
            </Button>
          </div>
        </div>
      )}
    </Container>
  );
};

export default SavedSearches;
