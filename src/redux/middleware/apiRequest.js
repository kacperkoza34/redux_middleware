import { API_REQUEST } from '../actions/apiRequest';
import { upDate } from '../actions/getBooks';

import Axios from 'axios';
//import { fetchSuccess, fetchError, stopLoading } from '../actions/getStatus';

const apiRequest = ({dispatch, getState}) => next => action => {
  next(action);
  //const { url, method } = action.meta;
  if( action.type === API_REQUEST) {
    const { method, url, name, body } = action.meta;
    Axios({
      method: method,
      url: url,
      data: body,
    })
      .then( ({data}) =>{
        dispatch(upDate(data.items));
      }
      )
      .catch( ({message}) =>{
        console.log(message);
      }
      );
  }
};

export default apiRequest;
