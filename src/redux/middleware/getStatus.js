import { updateAllTables, updateOneTable } from '../actions/getTables';
import { updateAllProducts } from '../actions/getProducts';


const getStatus = ({dispatch, getState}) => next => action => {
  next(action);
  if ( typeof action.meta !== 'undefined' ) {
    if( typeof action.meta.name !== 'undefined' ) {
      const { name, statusType, result }  = action.meta;

      const fetchSuccessCondition = statusType === 'fetch' && result === 'success';

      if( fetchSuccessCondition && name === 'tables' ) {

        if(Object.prototype.toString.call(action.payload) === '[object Object]' ) {
          dispatch(updateOneTable(action.payload));
        }
        else {
          dispatch(updateAllTables(action.payload));
        }
      }
      if( fetchSuccessCondition && name === 'products' ) {
        dispatch(updateAllProducts(action.payload));
        //
        // if(action.type === FETCH_PRODUCTS_ERROR) {
        //   console.log('coś poszło nie tak!');
        //   console.log(action.payload);
        // }
      }
    }
  }
};

export default getStatus;
