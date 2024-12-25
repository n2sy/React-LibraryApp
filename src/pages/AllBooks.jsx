import React, { useEffect, useState } from "react";
import BookList from "../components/BookList";

function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/book/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Books fetched successfully:", data);
        setBooks(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books:", error);
      });
  }, []);

  return (
    <>
      {/* <ul>{[<li>book 1</li>, <li>book 1</li>, <li>book 1</li>]}</ul> */}
      <BookList books={books} />
    </>
  );
}

export default AllBooks;
