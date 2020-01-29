import { API_REQUEST } from '../actions/apiRequest';
import Axios from 'axios';

const apiRequest = ({dispatch, getState}) => next => action => {
  next(action);
  //const { url, method } = action.meta;
  if( action.type === API_REQUEST) {
    const { method, url, onSuccess, onError, body } = action.meta;
    Axios({
      method: method,
      url: url,
      data: body,
    })
      .then( ({data}) =>
        dispatch({ type: onSuccess, payload: data}),
      )
      .catch( (error) =>
        dispatch({ type: onError, payload: error.message}),
      );
  }
};

export default apiRequest;
