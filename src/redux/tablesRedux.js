import Axios from 'axios';
import { api } from '../settings';
/* selectors */
export const getAll = ({tables}) => tables.data;
export const getLoadingState = ({tables}) => tables.loading;

/* action name creator */
const reducerName = 'tables';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchFromAPI = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`${api.url}/${api.tables}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const postToAPI = (row) => {
  const { id, order, status } = row;
  const statuses = [ 'thinking',
    'ordered',
    'prepared',
    'delivered',
    'paid',
    'free',
  ];

  const newStatus =  statuses.indexOf(status) === statuses.length-1 ? 0 : statuses.indexOf(status)+1;
  let newOrder = order === null || status === 'paid'? Math.round(Math.random() * 1000) : order;
  if (status === 'paid') newOrder = null;

  return (dispatch, getState) => {
    const tableData = {
      status: statuses[newStatus],
      order: newOrder,
    };
    Axios
      .put(`${api.url}/${api.tables}/${id}`, tableData)
      .then( res => {
        dispatch(fetchFromAPI());
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
}