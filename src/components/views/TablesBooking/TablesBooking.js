import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TablesBooking extends React.Component {
  render(){
    const { match: { params: { id: orderId } } } = this.props;

    const dateExample = new Date().toString().slice(0,16);
    const hourExample = new Date().toString().slice(16,21);

    return(
      <div className={styles.component}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <h1>Order</h1>
            <Card className={styles.card}>
              <CardContent>
                <Typography className={styles.title} color="textSecondary" gutterBottom>
                  Order id: {orderId}
                </Typography>
                <Typography variant="h5" component="h2">
                  Date: {dateExample}
                </Typography>
                <Typography variant="h5" component="h2">
                  Hour: {hourExample}
                </Typography>

                <Typography className={styles.pos} color="textSecondary">
                  adjective
                </Typography>
                <Typography variant="body2" component="p">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TablesBooking.propTypes = {
  match: PropTypes.string,
};

export default TablesBooking;
