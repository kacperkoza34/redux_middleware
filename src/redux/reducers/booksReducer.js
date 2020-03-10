import { UP_DATE,
         START_LOADING,
         STOP_LOADING,
         DELETE_ONE,
         ADD_ONE,
         ERROR
} from '../actions/books';

export const selectBooks = ({books}) => (books);

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UP_DATE:
      return {
        ...statePart,
        data: action.payload == null? ['There is no books'] : action.payload
      };

    case DELETE_ONE:
      return {
        ...statePart,
        isFetching: false,
        data: statePart.data.length === 1 ? ['Don \' leave my list empty :(' ] : statePart.data.filter( ({id}) =>( id !== action.payload))
      };

    case ADD_ONE:
      return {
        ...statePart,
        isFetching: false,
        data:[ ...statePart.data, action.payload]
      };

    case START_LOADING:
      return {
        ...statePart,
        isFetching: true
      };

    case STOP_LOADING:
      return {
        ...statePart,
        isFetching: false
      };

    case ERROR:
      return {
        ...statePart,
        isFetching: false,
        isError: action.payload
      };

    default:
      return statePart;
  }
}
