export const FETCH_TABLES_SUCCESS = '[tables] Fetch success';
export const FETCH_TABLES_ERROR   = '[tables] Fetch Error';

export const fetchTablesSuccess = () => ({
  type: FETCH_TABLES_SUCCESS,
});

export const fetchTablesError = () => ({
  type: FETCH_TABLES_ERROR,
});
