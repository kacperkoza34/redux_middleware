import { UP_DATE } from '../actions/getBooks';

export const selectBooks = ({books}) => (books);

export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UP_DATE:
      return {
        ...statePart,
        data: action.payload
      };

    default:
      return statePart;
  }
}
