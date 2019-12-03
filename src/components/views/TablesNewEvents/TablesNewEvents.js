import React from 'react';
import styles from './TablesNewEvents.scss'

class TablesNewEvents extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
          - analogicznie do powyższej, dla eventów, bez początkowych informacji
        </h2>
      </div>
    );
  }
}

TablesNewEvents.propTypes = {

};

export default TablesNewEvents;
