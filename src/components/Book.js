import React from 'react';

const Book = ({ book }) => {
  // const handleChange = e => {
  //   const shelf = e.target.value;
  //   const res = update(book, shelf);
  // };

  return (
    <div>
      <li>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  book.imageLinks ? book.imageLinks.thumbnail : ''
                })`
              }}
            />
            <div className='book-shelf-changer'>
              <select value={book.shelf || 'none'}>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{book.title}</div>
          <div className='book-authors'>{book.authors[0]}</div>
        </div>
      </li>
    </div>
  );
};

export default Book;
