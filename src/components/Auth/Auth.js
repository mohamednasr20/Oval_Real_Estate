import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { handleShowAuthModal } from '../../actions/globalState';
import { signUp, login } from '../../firebase/auth';
import useStyles from './styles';

const Auth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showAuth = useSelector((state) => state.globalState.showAuth);
  const [isLogin, setIsLogin] = useState(false);
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      if (isLogin) {
        await login(data);
        reset({ email: '', password: '' });
      } else {
        await signUp(data);
        reset({ firstName: '', lastName: '', email: '', password: '' });
      }
      dispatch(handleShowAuthModal(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Modal
        open={showAuth}
        onClose={() => dispatch(handleShowAuthModal(false))}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <form className={classes.paper} onSubmit={handleSubmit(onSubmit)}>
          <Typography gutterBottom variant="h5">
            {isLogin ? 'Log in' : 'Sign up'}
          </Typography>
          {!isLogin && (
            <div className={classes.nameFields}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    style={{ marginRight: 6 }}
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'First name required' }}
              />
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: 'Last name required' }}
              />
            </div>
          )}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.textField}
                fullWidth
                variant="outlined"
                size="small"
                name="email"
                id="email"
                placeholder="Email"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Email required' }}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                className={classes.textField}
                fullWidth
                variant="outlined"
                name="password"
                size="small"
                id="password"
                placeholder="password"
                type="password"
                value={value}
                onChange={onChange}
                error={!!error}
                helperText={error ? error.message : null}
              />
            )}
            rules={{ required: 'Password required' }}
          />

          <Button type="submit" variant="contained" fullWidth color="primary">
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
          <Typography
            className={classes.changeForm}
            variant="h6"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin
              ? "Dont't have acount?Sign Up"
              : 'Have already acount? Log In'}
          </Typography>
        </form>
      </Modal>
    </div>
  );
};

export default Auth;
