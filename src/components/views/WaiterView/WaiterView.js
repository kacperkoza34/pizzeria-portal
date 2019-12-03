import React from 'react';
import styles from './WaiterView.scss'

class WaiterView extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>
        - tabela
          - w wierszach stoliki
          - w kolumnach różne rodzaje informacji ( status, czas od ostatniej aktywnośći)
          - w ostatniej kolumnie dostępne akcje dla danego stolika
        </h2>
      </div>
    );
  }
}

WaiterView.propTypes = {

};

export default WaiterView;
