export const createSuccessName = (name) => `[${name}] Fetch success`;
export const createErrorName = (name) => `[${name}] Fetch error`;
export const createStartLoading = (name) => `[${name}] Start loading`;
export const createStopLoading = (name) => `[${name}] Stop loading`;

export const fetchSuccess = (name, data) => ({
  type: createSuccessName(name),
  payload: data,
  meta: { name, statusType: 'fetch', result: 'success' },
});

export const fetchError = (name, error) => ({
  type: createErrorName(name),
  payload: error,
  meta: { name, statusType: 'fetch', result: 'error' },
});

export const startLoading = (name) => ({
  type: createStartLoading(name),
  meta: { name, statusType: 'load', result: 'start' },
});

export const stopLoading = (name) => ({
  type: createStopLoading(name),
  meta: { name, statusType: 'load', result: 'stop'},
});
