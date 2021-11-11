import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { useSelector } from 'react-redux';
import useStyles from './styles';

const ScheduleForm = ({ property }) => {
  const classes = useStyles();
  const searchType = useSelector((state) => state.globalState.searchType);
  const [meetType, setMeetType] = useState('inPerson');

  return (
    <div className={classes.root}>
      {searchType === 'list-for-sale' && (
        <div>
          <Typography
            className={classes.heading}
            variant="h6"
          >{`$${property.price}`}</Typography>
          <div className={classes.flex}>
            <Typography
              className={`${classes.lead} ${classes.estimate}`}
              variant="body2"
              color="textSecondary"
            >{`EST.Mortagage $${property?.mortgage.estimate.monthly_payment}/mo`}</Typography>
            <Link href={property?.mortgage.rates_url} target="_blank">
              Estimation
            </Link>
          </div>
        </div>
      )}

      <Typography className={classes.secondaryHeader} variant="h6" gutterBottom>
        Schedule a tour
      </Typography>
      <form>
        <div className={classes.flex}>
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
        </div>

        <TextField
          id="datetime-local"
          label="choose a time"
          type="datetime-local"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          className={classes.textField}
          placeholder="Your Name"
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
          placeholder="Your Phone"
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
        <TextField
          className={classes.textField}
          placeholder="Your Email"
          id="outlined-size-small"
          defaultValue=""
          variant="outlined"
          size="small"
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
