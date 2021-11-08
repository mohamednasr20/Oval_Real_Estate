import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import useStyle from './styles';

const PriceHistory = ({ events }) => {
  const classes = useStyle();
  return (
    <TableContainer className={classes.table}>
      <Table>
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {events?.map((event, i) => (
            <TableRow key={i}>
              <TableCell>{event.date.split('T')[0]}</TableCell>
              <TableCell>{`$${event.price}`}</TableCell>
              <TableCell>{event.event_name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceHistory;
