import React from 'react';
import styles from './Kitchen.scss';

class Kitchen extends React.Component {

  render(){
    return(
      <div className={styles.component}>
        <h2>Kitchen view</h2>
      </div>
    );
  }
}

Kitchen.propTypes = {

};

export default Kitchen;
