export const GET_PRODUCTS = '[products] GET';

export const FETCH_PRODUCTS_SUCCESS = '[products] Fetch success';
export const FETCH_PRODUCTS_ERROR   = '[products] Fetch Error';
export const UPDATE_ALL_PRODUCTS = '[products] Update all products';


export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const fetchProductsSuccess = () => ({
  type: FETCH_PRODUCTS_SUCCESS,
});

export const fetchProductsError = () => ({
  type: FETCH_PRODUCTS_ERROR,
});

export const updateAllProducts = (data) => ({
  type: UPDATE_ALL_PRODUCTS,
  payload: data,
});
