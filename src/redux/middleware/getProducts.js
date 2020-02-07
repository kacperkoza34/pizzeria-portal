import { GET_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR,
  updateAllProducts,
} from '../actions/getProducts';
import { apiRequest } from '../actions/apiRequest';
import { api } from '../urls';


const getProducts = ({dispatch, getState}) => next => action => {
  next(action);
  if(action.type === GET_PRODUCTS) {
    dispatch(apiRequest('GET',
      api.getProductsURL,
      null,
      FETCH_PRODUCTS_SUCCESS,
      FETCH_PRODUCTS_ERROR,
    ));
  }

  if(action.type === FETCH_PRODUCTS_SUCCESS) {
    dispatch(updateAllProducts(action.payload));
  }

  if(action.type === FETCH_PRODUCTS_ERROR) {
    console.log('coś poszło nie tak!');
    console.log(action.payload);
  }


};

export default getProducts;
