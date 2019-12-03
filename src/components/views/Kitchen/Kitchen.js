import React from 'react';
import styles from './Kitchen.scss'

class Kitchen extends React.Component {

  render(){
    return(
      <div>
        <h2 className={styles.component}>Kitchen view</h2>
      </div>
    );
  }
}

Kitchen.propTypes = {

};

export default Kitchen;
