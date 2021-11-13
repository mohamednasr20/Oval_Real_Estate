import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { handleShowAuthModal } from '../../actions/globalState';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showAuth = useSelector((state) => state.globalState.showAuth);
  const [signIn, setSignIn] = useState(false);

  return (
    <div className={classes.root}>
      <Modal
        open={showAuth}
        onClose={() => dispatch(handleShowAuthModal(false))}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form className={classes.paper}>
          <Typography gutterBottom variant="h5">
            {signIn ? 'Log in' : 'Sign up'}
          </Typography>
          {!signIn && (
            <div className={classes.nameFields}>
              <TextField
                style={{ marginRight: 6 }}
                className={classes.textField}
                variant="outlined"
                name="FirstName"
                placeholder="First Name"
              />
              <TextField
                className={classes.textField}
                variant="outlined"
                name="LastName"
                placeholder="Last Name"
              />
            </div>
          )}
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            name="email"
            placeholder="Email"
          />
          <TextField
            className={classes.textField}
            fullWidth
            variant="outlined"
            name="password"
            placeholder="password"
            type="password"
          />
          {!signIn && (
            <TextField
              className={classes.textField}
              fullWidth
              variant="outlined"
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
            />
          )}
          <Button variant="contained" fullWidth color="primary">
            {signIn ? 'Log In' : 'Sign Up'}
          </Button>
          <Typography
            className={classes.changeForm}
            variant="h6"
            onClick={() => setSignIn(!signIn)}
          >
            {signIn
              ? "Dont't have acount?Sign Up"
              : 'Have already acount? Log In'}
          </Typography>
        </form>
      </Modal>
    </div>
  );
};

export default Auth;
