import React from 'react';
import List from '../SearchResults/List/List';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { useHistory } from 'react-router';
import useStyles from './styles';

const SavedHomes = () => {
  const userDocument = useSelector((state) => state.userState.userDocument);
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h4">Saved Homes</Typography>
      {userDocument?.savedHomes?.length ? (
        <div className={classes.listContainer}>
          <List showMap={false} properties={userDocument.savedHomes} />
        </div>
      ) : (
        <div className={classes.flex}>
          <div>
            <Typography variant="body1" className={classes.lead}>
              You haven't added any homes yet. Start searching for properties to
              add now.
            </Typography>
            <Button
              className={classes.btn}
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

export default SavedHomes;
