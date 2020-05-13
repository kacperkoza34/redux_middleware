import { apiRequest } from "../actions/apiRequest";
import {
  GET_DATA_NAME,
  STOP_LOADING,
  DELETE_BOOK,
  ADD_BOOK,
  upDate,
  loading,
  stopLoading,
  deleteOne,
  addOne,
  error,
} from "../actions/books";

//const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';
//const url2 = 'https://www.swapi.co/api/planets/5';

const jsonServerUrl = `/books`;

const getBooks = ({ dispatch, getBooks }) => (next) => (action) => {
  next(action);
  if (action.type === GET_DATA_NAME) {
    dispatch(loading());
    dispatch(apiRequest("GET", jsonServerUrl, stopLoading, error, null));
  }

  if (action.type === DELETE_BOOK) {
    dispatch(
      apiRequest(
        "DELETE",
        `${jsonServerUrl}/${action.payload}`,
        deleteOne,
        error,
        action.payload
      )
    );
  }

  if (action.type === ADD_BOOK) {
    dispatch(
      apiRequest("POST", jsonServerUrl, addOne, error, {
        title: action.payload,
      })
    );
  }

  if (action.type === STOP_LOADING) {
    dispatch(upDate(action.payload));
  }
};

export default getBooks;
