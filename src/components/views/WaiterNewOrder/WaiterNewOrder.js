import React, { useState, useEffect} from 'react';
import styles from './WaiterNewOrder.module.scss';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import waiterNewOrderData from '../../../data/waiterNewOrderData.js';
import PropTypes from 'prop-types';



const WaiterNewOrder = ({fetchProducts}) => {

  const [ table, setTable] = useState(null);
  const [starter, setStarter] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour

  //
  const handleChange = (event, id) => {
    switch (id) {
      case 'table':
        setTable(event.target.value);
        break;

      case 'starter':
        setStarter(event.target.value);
        break;

      default:

    }
  };

  return(
    <Paper className={styles.component}>
      <h3>Add new order</h3>
      <div className={styles.inputs}>
        { waiterNewOrderData.map( ({id, placeHolder, title, helperText, settings, options, handler}) =>
          <div key={id} className={styles.singleForm}>
            <h5>{title}</h5>
            <TextField
              id={id}
              select
              className={styles[settings.size]}
              label={placeHolder}
              value={table}
              onChange={ event => handleChange(event, id)}
              helperText={helperText}
            >
              {options.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        )
        }

      </div>
    </Paper>);
};

WaiterNewOrder.propTypes = {
  fetchProducts: PropTypes.func,
};

export default WaiterNewOrder;
