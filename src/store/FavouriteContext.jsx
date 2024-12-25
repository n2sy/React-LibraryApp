import { createContext } from "react";
import { useState } from "react";

const favContext = createContext({
  nbFavourites: 0,
  tabFavourites: [],
  addFavourite: (book) => {},
  deleteFavourite: (book) => {},
  isFavourite: (book) => {},
});

export function FavContextProvider(props) {
  const [nbFavourites, setNbFavourites] = useState(0);
  const [tabFavourites, setTabFavourites] = useState([]);
  function addFavourite(book) {
    setTabFavourites([...tabFavourites, book]);
    setNbFavourites(nbFavourites + 1);
  }

  function deleteFavourite(id) {
    setTabFavourites(tabFavourites.filter((b) => b.id !== id));
    setNbFavourites(nbFavourites - 1);
  }

  function isFavourite(book) {
    console.log("isFavourite", tabFavourites);
    return tabFavourites.some((b) => b.id === book.id);
  }

  let c = {
    nbFavourites,
    tabFavourites,
    addFavourite,
    deleteFavourite,
    isFavourite,
  };

  return <favContext.Provider value={c}>{props.children}</favContext.Provider>;
}

export default favContext;
