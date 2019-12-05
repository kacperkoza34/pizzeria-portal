import React from 'react';
import styles from './WaiterView.scss';

class WaiterView extends React.Component {

  render(){
    return(
      <div className={styles.component}>
        <h2>
          Waiter View
        </h2>
      </div>
    );
  }
}

WaiterView.propTypes = {

};

export default WaiterView;
