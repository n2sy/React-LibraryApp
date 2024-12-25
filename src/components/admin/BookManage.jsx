import React, { useRef, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import ModalAddBook from "./ModalAddBook";
import NewBookForm from "../NewBookForm";

function BookManage({ books, refreshBooks }) {
  const [show, setShow] = useState(false);
  const modal = useRef();
  const handleEdit = (book) => {};

  const handleSave = (bookData) => {};

  const handleCloseModal = () => {};

  function closeModal() {
    setShow(false);
  }

  console.log("dans bookmanage", show);
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Books</h2>
        <button className="btn btn-primary" onClick={() => setShow(true)}>
          Add Book
        </button>
      </div>

      <ModalAddBook show={show} onClose={closeModal}>
        <NewBookForm
          onClose={closeModal}
          refreshBooks={refreshBooks}
        ></NewBookForm>
      </ModalAddBook>

      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Year</th>
              <th>Editor</th>
              <th style={{ display: "table-cell" }} colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{`${book.author?.nom} ${book.author?.prenom}`}</td>
                <td>{book.publisher}</td>
                <td>{book.year}</td>
                <td>{book.editor}</td>
                <td colSpan={2}>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(book)}
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => onDelete(book.id)}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* <BookModal
        show={showModal}
        onClose={handleCloseModal}
        onSave={handleSave}
        book={selectedBook}
        authors={authors}
      /> */}
    </div>
  );
}

export default BookManage;
