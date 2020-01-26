import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterView.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { setNewStatus } from '../../../utils';

class WaiterView extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    tables: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object,
    ]),
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
      ]),
    }),
    postStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(row){
    const { postStatus } = this.props;
    const { status } = row;
    const nextStatus = setNewStatus(status);

    if(status === 'free') {
      return (
        <>
          <Button onClick={ () => postStatus(row)}>thinking</Button>
          <Button onClick={ () =>{ row.status = 'thinking'; return postStatus(row);}}>new order</Button>
        </>
      );
    } else {
      return <Button onClick={() => postStatus(row)}>{nextStatus}</Button>;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default WaiterView;
