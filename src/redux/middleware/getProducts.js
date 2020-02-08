import { GET_PRODUCTS } from '../actions/getProducts';
import { apiRequest } from '../actions/apiRequest';
import { api } from '../urls';
import { startLoading } from '../actions/getStatus';


const getProducts = ({dispatch, getState}) => next => action => {
  next(action);
  if(action.type === GET_PRODUCTS) {
    dispatch(startLoading('products'));
    dispatch(apiRequest('GET',
      api.getProductsURL,
      'products',
      null
    ));
  }
};

export default getProducts;
