export const API_REQUEST = 'Api reguest';

export const apiRequest = (method, url, name, onSucces, onError) => ({
  type: API_REQUEST,
  meta: { method, url, name, onSucces, onError }
});
