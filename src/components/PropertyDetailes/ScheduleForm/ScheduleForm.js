import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useStyles from './styles';

const ScheduleForm = () => {
  const classes = useStyles();
  const [meetType, setMeetType] = useState('inPerson');

  return (
    <div className={classes.root}>
      <Typography className={classes.secondaryHeader} variant="h6" gutterBottom>
        Schedule a tour
      </Typography>
      <form>
        <Button
          className={classes.meetTypeBtn}
          variant="contained"
          color={meetType === 'inPerson' ? 'primary' : 'default'}
          onClick={() => setMeetType('inPerson')}
        >
          In Person
        </Button>
        <Button
          className={classes.meetTypeBtn}
          variant="contained"
          color={meetType === 'virtual' ? 'primary' : 'default'}
          onClick={() => setMeetType('virtual')}
        >
          Virtual Meet
        </Button>
        <TextField
          id="datetime-local"
          label="choose a time"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <div className={classes.flex}>
          <TextField
            className={classes.textField}
            placeholder="Name"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
            style={{ marginRight: 5 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.textField}
            placeholder="Phone"
            id="outlined-size-small"
            defaultValue=""
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SmartphoneIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <TextField
          className={classes.textField}
          placeholder="Email"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
          style={{ width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={<Checkbox color="secondary" />}
          label="I want to talk about financing"
        />
        <Button
          className={classes.submitBtn}
          fullWidth
          variant="contained"
          color="secondary"
        >
          Schedule A Tour
        </Button>
      </form>
    </div>
  );
};

export default ScheduleForm;
