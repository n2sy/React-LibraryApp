import React, { useContext } from "react";
import BookList from "../components/BookList";
import favContext from "../store/FavouriteContext";

function Favourites() {
  const favCtx = useContext(favContext);

  return (
    <div>
      <BookList books={favCtx.tabFavourites}></BookList>
    </div>
  );
}

export default Favourites;
