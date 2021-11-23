import React, { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { db } from '../../firebase/config';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const SavedHomes = () => {
  const [userDocument, setUserDocument] = useState(null);

  const user = useSelector((state) => state.userState.user);
  const classes = useStyles();

  useEffect(() => {
    const unsub = () => {
      if (user) {
        onSnapshot(doc(db, 'users', user.uid), (doc) => {
          if (doc.exists) {
            const documentData = doc.data();
            setUserDocument(documentData);
          }
        });
      }
    };
    unsub();

    // eslint-disable-next-line
  }, [user]);

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Typography variant="h4">Saved Homes</Typography>
      {userDocument?.savedHomes?.length ? (
        <div>{userDocument?.savedHomes[0]?.address}</div>
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
              color="secondary"
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
