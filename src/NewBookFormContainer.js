import NewBookForm from './NewBookForm';
import { connect } from 'react-redux';
// selectors
import { addBook } from './redux/actions/books';

const mapDispatchToProps = (dispatch) => ({
  addBook: (title) => dispatch(addBook(title))
});

export default connect(null,mapDispatchToProps)(NewBookForm);
