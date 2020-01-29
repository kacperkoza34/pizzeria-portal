export const API_REQUEST = 'Api reguest';

export const apiRequest = (method, url, body, onSuccess, onError) => ({
  type: API_REQUEST,
  payload: body,
  meta: { method, url, onSuccess, onError, body },
});
