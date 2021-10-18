import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import useStyles from './styles';

const ServicesCard = ({ icon, header, text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <img className={classes.icon} src={icon} alt={`icon-${header}`} />
      <Typography color="textSecondary" variant="h5">
        {header}
      </Typography>
      <Typography className={classes.text}>{text}</Typography>
    </Card>
  );
};

export default ServicesCard;
