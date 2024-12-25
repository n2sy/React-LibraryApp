import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Favourites from "./pages/Favourites";
import LogCtx from "./store/LoginContext";
import AdminBooks from "./pages/AdminBooks";
import AdminAuthors from "./pages/AdminAuthors";

function App() {
  const [count, setCount] = useState(0);
  let MY_DATA = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      publisher: "Secker & Warburg",
      image: "https://covers.openlibrary.org/b/id/7222246-L.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      publisher: "J.B. Lippincott & Co.",
      image: "https://covers.openlibrary.org/b/id/8225261-L.jpg",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      publisher: "Charles Scribner's Sons",
      image: "https://covers.openlibrary.org/b/id/7222161-L.jpg",
    },
    {
      id: 4,
      title: "100 Years of Solitude",
      author: "Gabriel G Marquez",
      year: 1967,
      publisher: "Harper & Row",
      image: "https://covers.openlibrary.org/b/id/8231991-L.jpg",
    },
    {
      id: 5,
      title: "Moby Dick",
      author: "Herman Melville",
      year: 1851,
      publisher: "Harper & Brothers",
      image: "https://covers.openlibrary.org/b/id/7222256-L.jpg",
    },
    {
      id: 6,
      title: "War and Peace",
      author: "Leo Tolstoy",
      year: 1869,
      publisher: "The Russian Messenger",
      image: "https://covers.openlibrary.org/b/id/7222261-L.jpg",
    },
  ];
  let ctx = useContext(LogCtx);

  if (ctx.isLogged) {
    if (ctx.role == "user")
      return (
        <>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route
              path="/add-book"
              element={<AddBook />}
              caseSensitive={true}
            /> */}
              <Route path="/all-books" element={<AllBooks />} />
              <Route path="/favourites" element={<Favourites />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </>
      );
    else {
      return (
        <>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route
                  path="/add-book"
                  element={<AddBook />}
                  caseSensitive={true}
                /> */}
              <Route path="/admin-books" element={<AdminBooks />} />
              <Route path="/admin-authors" element={<AdminAuthors />} />
            </Routes>
          </div>
        </>
      );
    }
  } else {
    return (
      <>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
