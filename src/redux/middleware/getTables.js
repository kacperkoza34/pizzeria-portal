import { api } from '../urls';
import { apiRequest } from '../actions/apiRequest';
import { GET_TABLES,
  setLoading,
  displayError,
  PUT_TABLES,
} from '../actions/getTables';

import { FETCH_TABLES_SUCCESS,
         FETCH_TABLES_ERROR
} from '../actions/getStatus';

import { setNewStatus } from '../../utils';

const getTables = ({dispatch, getState}) => next => action => {
  next(action);
  if( action.type === GET_TABLES) {
    dispatch(setLoading());
    dispatch(apiRequest('GET',
      api.getTablesURL,
      null,
      FETCH_TABLES_SUCCESS,
      FETCH_TABLES_ERROR,
    ));
  }

  if( action.type === PUT_TABLES) {
    //dispatch(setLoading());
    const { id, status, order } = action.payload;
    const newStatus =  setNewStatus(status);
    let newOrder = order === null || status === 'paid'? Math.round(Math.random() * 1000) : order;
    if (status === 'paid') newOrder = null;

    const tableData = {
      status: newStatus,
      order: newOrder,
    };
    const putTableURL = `${api.getTablesURL}/${id}`;
    dispatch(apiRequest('PUT',
      putTableURL,
      tableData,
      FETCH_TABLES_SUCCESS,
      FETCH_TABLES_ERROR,
    ));
  }
};

export default getTables;
