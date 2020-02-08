import React from 'react';
import styles from './TablesEvents.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class TablesEvents extends React.Component {
  state = {
    data:  [
      {id: 22, eventId: 33, time: '12:30'},
      {id: 33, eventId: 66, time: '12:50'},
      {id: 11, eventId: 88, time: '12:00'},

    ],
  }

  render(){
    return(
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Table</TableCell>
              <TableCell>Event id</TableCell>
              <TableCell>Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {this.state.data.map( ({id, eventId, time}, index) => (
              <TableRow key={index}>
                <TableCell>
                  {id}
                </TableCell>
                <TableCell>
                  {eventId}
                </TableCell>
                <TableCell>
                  {time}
                </TableCell>
              </TableRow>
            ))}

          </TableBody>
        </Table>
      </Paper>
    );
  }
}

TablesEvents.propTypes = {

};

export default TablesEvents;
