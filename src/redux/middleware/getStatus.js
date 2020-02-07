import { updateAllTables,
  updateOneTable,
  stopLoading,
  displayError
} from '../actions/getTables';

import { FETCH_TABLES_SUCCESS,
         FETCH_TABLES_ERROR,
} from '../actions/getStatus';

const getStatus = ({dispatch, getState}) => next => action => {
  next(action);
  if( action.type === FETCH_TABLES_SUCCESS) {
    if(Object.prototype.toString.call(action.payload) === '[object Object]' ) {
      dispatch(updateOneTable(action.payload));
    }
    else {
      dispatch(stopLoading());
      dispatch(updateAllTables(action.payload));
    }
  }

  if( action.type === FETCH_TABLES_ERROR) {
    console.log(action.payload);
    dispatch(stopLoading());
    dispatch(displayError(action.payload));
  }

};

export default getStatus;
