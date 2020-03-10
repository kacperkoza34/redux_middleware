export const API_REQUEST = 'Api reguest';

export const apiRequest = (method, url, onSucces, onError, body) => ({
  type: API_REQUEST,
  meta: { method, url, onSucces, onError, body }
});
