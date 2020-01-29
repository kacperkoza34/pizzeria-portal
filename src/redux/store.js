import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// use middllware
import log from './middleware/log';
import getTables from './middleware/getTables';
import getProducts from './middleware/getProducts';
import apiRequest from './middleware/apiRequest';


// reducers
import tablesReducer from './reducers/tablesReducer';
import productsReducer from './reducers/productsReducer';


// define initial state and shallow-merge initial data
const initialState = {
  tables: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },

  products: {
    data: {},
    loading: {
      active: false,
      error: false,
    },
  },
};

// define reducers
const reducers = {
  tables: tablesReducer,
  products: productsReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      log,
      getTables,
      apiRequest,
      getProducts
    ),
  )
);

export default store;
