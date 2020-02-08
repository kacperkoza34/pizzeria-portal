export const GET_TABLES = '[tables] GET';
export const PUT_TABLES = '[tables] PUT';
export const UPDATE_ALL_TABLES = '[tables] Update all tables';
export const UPDATE_ONE_TABLE   = '[tables] Update one table';


export const getTables = () => ({
  type: GET_TABLES,
});

export const changeStatus = (row) => ({
  type: PUT_TABLES,
  payload: row,
});

export const updateAllTables = (data) => ({
  type: UPDATE_ALL_TABLES,
  payload: data,
});

export const updateOneTable = (data) => ({
  type: UPDATE_ONE_TABLE,
  payload: data,
});

// const reducerName = 'tables';
// const createActionName = name => `app/${reducerName}/${name}`;
//
// /* action types */
// const FETCH_START = createActionName('FETCH_START');
// const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
// const FETCH_ERROR = createActionName('FETCH_ERROR');
//
// /* action creators */
// export const fetchStarted = payload => ({ payload, type: FETCH_START });
// export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
// export const fetchError = payload => ({ payload, type: FETCH_ERROR });
