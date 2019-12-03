import React from 'react';
import styles from './WaiterNewOrder.scss'

class WaiterNewOrder extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
        - numer stolika (edytowalny)
        - menu produktów
        - opcje wybranego produktu
        - zamównie (zamówienie produktu z opcjami i ceną)
        -kwote zamówienia
        </h2>
      </div>
    );
  }
}

WaiterNewOrder.propTypes = {

};

export default WaiterNewOrder;
