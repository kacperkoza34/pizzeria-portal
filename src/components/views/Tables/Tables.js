import React from 'react';
import styles from './Tables.module.scss';
import Grid from '@material-ui/core/Grid';

const Tables = () => {

  return (
    <Grid container className={styles.component} spacing={2}>
      <h1>Tables</h1>
      <Grid item xs={12}>
        <div className={styles.floor}>
          <div className={styles.entry}>entry</div>
          <div className={[styles.bar, styles.object].join(' ')}>bar</div>
          <div className={[styles.table, styles.table1, styles.object].join(' ')} >table-1</div>
          <div className={[styles.table, styles.radius, styles.table2, styles.object].join(' ')} >table-2</div>
          <div className={[styles.table, styles.table3, styles.object].join(' ')} >table-3</div>
        </div>
      </Grid>
    </Grid>
  );
};

Tables.propTypes = {

};

export default Tables;
