export const API_REQUEST = 'Api reguest';

export const apiRequest = (method, url, name, body) => ({
  type: API_REQUEST,
  meta: { method, url, name, body },
});
