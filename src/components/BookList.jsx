import React from "react";
import BookItem from "./BookItem";
import "./BookList.css";

function BookList({ books }) {
  return (
    <ul className="list">
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-6">
            <BookItem oneBook={book}></BookItem>
          </div>
        ))}
      </div>
    </ul>
  );
}

export default BookList;
