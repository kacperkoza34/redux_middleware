export const GET_DATA_NAME = '[books] GET';
export const DELETE_BOOK = '[books] DELETE';
export const ADD_BOOK = '[books] POST';
export const DELETE_ONE = '[books] delete one';
export const ADD_ONE = '[books] add one';
export const UP_DATE = '[books] update all';
export const START_LOADING = '[books] start fetching';
export const STOP_LOADING = '[books] stop fetching';
export const ERROR = '[books] error';

export const getBooks = () => ({
  type: GET_DATA_NAME,
});

export const upDate = (payload) => ({
  type: UP_DATE,
  payload
});

export const loading = () => ({
  type: START_LOADING,
});

export const stopLoading = (payload) => ({
  type: STOP_LOADING,
  payload
});

export const deleteBook = (payload) => ({
  type: DELETE_BOOK,
  payload
});

export const deleteOne = (payload) => ({
  type: DELETE_ONE,
  payload
});


export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload
});

export const addOne = (payload) => ({
  type: ADD_ONE,
  payload
});

export const error = (payload) => ({
  type: ERROR,
  payload
});
