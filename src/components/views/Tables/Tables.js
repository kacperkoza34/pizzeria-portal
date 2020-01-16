import React from 'react';
import styles from './Tables.module.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const Tables = () => {
  const [ status, changeStatus ] = React.useState(null);

  const handleSetTable = (value) => {
    changeStatus(value);
  };

  return (
    <Grid container className={styles.component} spacing={2}>
      <Grid item xs={12} className={styles.grid}>
        <Grid container className={styles.tablesWrapper}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item>
              <Paper onClick={(event) => handleSetTable(value)} className={styles.table}>
                <h4 className={ status === value ? styles.active : '' }>Table {value+1}</h4>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

Tables.propTypes = {

};

export default Tables;
