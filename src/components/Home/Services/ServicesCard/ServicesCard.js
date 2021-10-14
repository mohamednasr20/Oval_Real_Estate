import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles';
import buyIcon from '../../../../assets/serviceBuy.png';

const ServicesCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <img className={classes.icon} src={buyIcon} alt="icon" />
      <Typography color="textSecondary" variant="h5">
        Buy Home
      </Typography>
      <Typography
        sx={{ marginTop: 1, paddingRight: { sx: 4, sm: 0.5, md: 4 } }}
      >
        Find your place with an immerseve phote experince and the most listings,
        includes things you won't find any where
      </Typography>
    </Paper>
  );
};

export default ServicesCard;
