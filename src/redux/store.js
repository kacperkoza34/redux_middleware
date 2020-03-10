import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import booksReducer from './reducers/booksReducer';

/// applyMiddleware
import getBooks from './middleware/books';
import apiRequest from './middleware/apiRequest';
import log from './middleware/log';

const initialState ={
  books: {
    data: [],
    isFetching: false,
    isError: false
  }
};

const reducers = {
  books: booksReducer
};

const combinedReducers = combineReducers(reducers);


const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      log,
      getBooks,
      apiRequest
    ),
  )
);

export default store;
