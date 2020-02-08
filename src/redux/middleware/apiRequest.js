import { API_REQUEST } from '../actions/apiRequest';
import Axios from 'axios';
import { fetchSuccess, fetchError, stopLoading } from '../actions/getStatus';

const apiRequest = ({dispatch, getState}) => next => action => {
  next(action);
  //const { url, method } = action.meta;
  if( action.type === API_REQUEST) {
    const { method, url, name, body } = action.meta;
    Axios({
      method: method,
      url: url,
      data: body,
    })
      .then( ({data}) =>{
        dispatch(fetchSuccess(name, data));
        dispatch(stopLoading(name));
      }
      )
      .catch( ({message}) =>{
        dispatch(fetchError(name, message));
        dispatch(stopLoading(name));
      }
      );
  }
};

export default apiRequest;
