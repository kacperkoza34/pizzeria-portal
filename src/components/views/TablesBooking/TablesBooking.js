import React from 'react';
import styles from './TablesBooking.scss'

class TablesBooking extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
        - zawiera wszystkie informacje dotycące rezerwacji
        - umożliwia edycję i zapisanie zmian
        </h2>
      </div>
    );
  }
}

TablesBooking.propTypes = {

};

export default TablesBooking;
