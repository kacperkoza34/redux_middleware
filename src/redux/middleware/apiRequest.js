import { API_REQUEST } from "../actions/apiRequest";
import Axios from "axios";

const PORT =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5000";

const apiRequest = ({ dispatch, getState }) => (next) => (action) => {
  next(action);

  if (action.type === API_REQUEST) {
    const { method, url, onSucces, onError, body } = action.meta;
    Axios({
      method: method,
      url: url,
      data: body,
      baseURL: PORT,
    })
      .then(({ data }) => {
        dispatch(onSucces(method === "DELETE" ? body : data));
      })
      .catch(({ message }) => {
        dispatch(onError(message));
      });
  }
};

export default apiRequest;
