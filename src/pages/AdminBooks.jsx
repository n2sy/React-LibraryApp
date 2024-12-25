import React, { useEffect, useState } from "react";
import BookManage from "../components/admin/BookManage";

function AdminBooks() {
  const [books, setBooks] = useState([]);

  function getAllBooks() {
    fetch("http://localhost:3000/book/all")
      .then((response) => response.json())
      .then((data) => {
        console.log("Books fetched successfully:", data);
        setBooks(data);
      })
      .catch((error) => {
        console.error("There was an error fetching the books:", error);
      });
  }

  useEffect(() => {
    getAllBooks();
  }, []);

  return <BookManage books={books} refreshBooks={getAllBooks}></BookManage>;
}

export default AdminBooks;
