import { GET_DATA_NAME } from '../actions/getBooks';
import { apiRequest } from '../actions/apiRequest';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=react';

const getBooks = ({dispatch, getBooks}) => next => action => {
  next(action);
  if ( action.type == GET_DATA_NAME  ) {
    dispatch(apiRequest('GET', URL, 'Data', null));
  }
};

export default getBooks;
