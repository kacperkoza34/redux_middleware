import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const { test, fetchData, books: { data } } = props;
  return (
    <div className="App">
      <h2>List of books</h2>
      { data.length? '' : <button onClick={() => fetchData() }>Load books!</button> }
      <ul>
        {data.map( ({volumeInfo: { title }}) =>
          {
            return <li key={title}>{title} <span>DELETE</span></li>
          }
        )}
      </ul>
    </div>
  );
}

export default App;
