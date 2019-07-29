import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Library from './components/Library';
import Search from './components/Search';
// import { update } from '../BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  // state = {};

  // updateBook = (book, shelf) => {
  //   update(book, shelf).then(res => {
  //     book.shelf = shelf;
  //   });
  // };

  render() {
    return (
      <Router>
        <div className='app'>
          <Route exact path='/search' component={Search} />
          <Route exact path='/' component={Library} />
        </div>
      </Router>
    );
  }
}

export default BooksApp;
