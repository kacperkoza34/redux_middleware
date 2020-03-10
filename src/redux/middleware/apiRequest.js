import { API_REQUEST } from '../actions/apiRequest';
import Axios from 'axios';

const apiRequest = ({dispatch, getState}) => next => action => {
  next(action);
  //const { url, method } = action.meta;
  if( action.type === API_REQUEST) {
    const { method, url, onSucces, onError, body } = action.meta;
    Axios({
      method: method,
      url: url,
      data: body,
    })
      .then( ({data}) =>{
        dispatch(onSucces(method === 'DELETE'? body : data));
      }
      )
      .catch( ({message}) =>{
        dispatch(onError(message));
      }
      );
  }
};

export default apiRequest;
