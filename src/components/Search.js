import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { search } from '../BooksAPI';
import Book from './Book';

export default class Search extends Component {
  state = {
    query: '',
    books: []
  };

  // handleChange = e => {
  //   const query = e.target.value;
  //   this.setState({ query });
  //   const res = search(query);
  //   this.setState({
  //     books: res
  //   });
  // };

  // handleChange = async e => {
  //   try {
  //     const query = e.target.value;
  //     this.setState({ query });
  //     if (query.trim()) {
  //       const res = await search(query);
  //       if (res.error) {
  //         this.setState({ books: [] });
  //       } else {
  //       }
  //       this.setState({
  //         books: res
  //       });
  //     } else {
  //       this.setState({ books: [] });
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  render() {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link to='/' className='close-search'>
            Close
          </Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={this.handleChange}
              value={this.state.query}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <ol className='books-grid'>
            {this.state.books.length > 0 &&
              this.state.books.map(book => <Book key={book.id} {...book} />)}
          </ol>
        </div>
      </div>
    );
  }
}
