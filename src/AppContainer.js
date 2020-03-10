import App from './App';
import { connect } from 'react-redux';
// selectors
import { selectBooks } from './redux/reducers/booksReducer';
import { getBooks, deleteBook } from './redux/actions/books';

const mapStateToProps = (state) => ({
  books: selectBooks(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getBooks()),
  deleteBook: (id) => dispatch(deleteBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
