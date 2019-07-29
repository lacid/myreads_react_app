import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';
import { getAll } from '../BooksAPI';

export default class Library extends Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    getAll().then(res => {
      this.setState(() => ({
        books: res
      }));
    });
  };

  moveBook = (book, shelf) => {};

  render() {
    const { books } = this.state;

    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <BookShelf
            title='Currently Reading'
            books={books.filter(book => book.shelf === 'currentlyReading')}
          />
          <BookShelf
            title='Want to Read'
            books={books.filter(book => book.shelf === 'wantToRead')}
          />
          <BookShelf title='Read' books={books.filter(book => book.shelf === 'read')} />
        </div>
        <div className='open-search'>
          <Link to='/search' className='open-search'>
            <button>Add a book</button>
          </Link>
        </div>
      </div>
    );
  }
}
