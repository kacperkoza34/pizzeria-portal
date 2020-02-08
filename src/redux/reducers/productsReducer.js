import {UPDATE_ALL_PRODUCTS} from '../actions/getProducts';

export const getAll = ({products}) => products;

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_ALL_PRODUCTS:
      return {
        ...statePart,
        data: action.payload,
      };
    default:
      return statePart;
  }
}
