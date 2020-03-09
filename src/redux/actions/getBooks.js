export const GET_DATA_NAME = '[books] Get';
export const UP_DATE = '[books] update';

export const getBooks = () => ({
  type: GET_DATA_NAME,
});

export const upDate = (payload) => ({
  type: UP_DATE,
  payload
});
