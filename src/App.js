import React from 'react';
import './App.css';
import Loader from 'react-loader-spinner'
import NewBookForm from './NewBookFormContainer';
import Info from './Info'


class App extends React.Component {

 displayList(){
    const { books, deleteBook } = this.props;
    const allowDelete = books.data.length > 3;
    if(books.isFetching) return (
      <div>
        <Loader/>
      </div>);
    else if(books.isError) return  <div>{books.isError}</div>
    else if(books.data.length){
      return (
        <ul>
          { books.data.map( ({ title, id }, index) =>
            {
              return <li key={title+index}>{title}<span
                className={ allowDelete? '' : 'frozen'}
                onClick={
                () =>(allowDelete? deleteBook(id) : console.log('not allowed'))
              }
              >DELETE</span></li>
            }
          )}
        </ul>
      )
      }
  };
  componentDidMount(){
    const { fetchData } = this.props;
    fetchData();
  }
  render(){
    return (
      <div className="App">
        <div className='wrapper'>
          <h2>List of books</h2>
          <div className='list'>
            {this.displayList()}
            <NewBookForm/>
          </div>
          <div className='info'>
            <Info/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
