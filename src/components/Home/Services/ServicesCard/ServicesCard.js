import React from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import useStyles from './styles';
import buyIcon from '../../../../assets/serviceBuy.png';

const ServicesCard = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <img className={classes.icon} src={buyIcon} alt="icon" />
      <Typography variant="h5">Buy Home</Typography>
      <Typography sx={{ marginTop: 1, paddingRight: 4 }}>
        Find your place with an immerseve phote experince and the most listings,
        includes things you won't find any where
      </Typography>
    </Paper>
  );
};

export default ServicesCard;
