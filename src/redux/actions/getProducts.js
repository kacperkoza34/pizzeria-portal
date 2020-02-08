export const GET_PRODUCTS = '[products] GET';
export const UPDATE_ALL_PRODUCTS = '[products] Update all products';


export const getProducts = () => ({
  type: GET_PRODUCTS,
});

export const updateAllProducts = (data) => ({
  type: UPDATE_ALL_PRODUCTS,
  payload: data,
});
