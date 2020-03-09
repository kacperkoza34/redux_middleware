import App from './App';
import { connect } from 'react-redux';
// selectors
import { selectBooks } from './redux/reducers/booksReducer';
import { getBooks } from './redux/actions/getBooks';

const mapStateToProps = (state) => ({
  books: selectBooks(state)
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: () => dispatch(getBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
