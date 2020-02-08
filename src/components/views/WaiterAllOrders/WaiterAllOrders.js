import React from 'react';
import styles from './WaiterAllOrders.module.scss';

class WaiterAllOrders extends React.Component {

  render(){
    return(
      <div className={styles.component}>
        <h2>
          Waitres All Orders
        </h2>
      </div>
    );
  }
}

WaiterAllOrders.propTypes = {

};

export default WaiterAllOrders;
