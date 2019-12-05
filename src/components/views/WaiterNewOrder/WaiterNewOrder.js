import React from 'react';
import styles from './WaiterNewOrder.scss';

class WaiterNewOrder extends React.Component {

  render(){
    return(
      <div className={styles.component}>
        <h2>
          Waitres New Order
        </h2>
      </div>
    );
  }
}

WaiterNewOrder.propTypes = {

};

export default WaiterNewOrder;
