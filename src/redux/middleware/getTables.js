import { api } from '../urls';
import { apiRequest } from '../actions/apiRequest';
import { GET_TABLES,
  PUT_TABLES,
} from '../actions/getTables';
import { startLoading } from '../actions/getStatus';


import { setNewStatus } from '../../utils';

const getTables = ({dispatch, getState}) => next => action => {
  next(action);
  if( action.type === GET_TABLES) {
    dispatch(startLoading('tables'));
    dispatch(apiRequest('GET',
      api.getTablesURL,
      'tables',
      null
    ));
  }

  if( action.type === PUT_TABLES) {
    const { id, status, order } = action.payload;
    const newStatus =  setNewStatus(status);
    let newOrder = order === null || status === 'paid'? Math.round(Math.random() * 1000) : order;
    if (status === 'paid') newOrder = null;

    const tableData = {
      status: newStatus,
      order: newOrder,
    };
    const putTableURL = `${api.getTablesURL}/${id}`;
    //dispatch(startLoading('tables'));
    dispatch(apiRequest('PUT',
      putTableURL,
      'tables',
      tableData
    ));
  }
};

export default getTables;
