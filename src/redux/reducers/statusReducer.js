export const getTablesState = ({status: {tables}}) => tables.loading;
export const getProductsState = ({status: {products}}) => products;


export default function reducer(statePart = [], action = {}) {
  if ( typeof action.meta !== 'undefined' ) {
    if( typeof action.meta.name !== 'undefined' ) {
      switch (action.meta.result) {
        case 'success':
          return {
            ...statePart,
            [action.meta.name]: {
              loading: {
                active: true,
                error: false,
              },
            },
          };

        case 'error':
          return {
            ...statePart,
            [action.meta.name]: {
              loading: {
                active: false,
                error: action.payload,
              },
            },
          };

        case 'start':
          return {
            ...statePart,
            [action.meta.name]: {
              loading : {
                active: true,
                error: false,
              },
            },
          };

        case 'stop':
          return {
            ...statePart,
            [action.meta.name]: {
              loading: {
                ...statePart[action.meta.name].loading,
                active: false,
              },
            },
          };
        default:
          return statePart;
      }
    }
    return statePart;
  }
  return statePart;
}
