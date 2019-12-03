import React from 'react';
import styles from './TablesEvents.scss'

class TablesEvents extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
          - analogicznie do powyższej, dla eventów
        </h2>
      </div>
    );
  }
}

TablesEvents.propTypes = {

};

export default TablesEvents;
