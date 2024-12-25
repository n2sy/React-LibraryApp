import React, { useContext } from "react";
import "./BookItem.css";
import { Pencil, Trash } from "lucide-react";
import Card from "./Card";
import favContext from "../store/FavouriteContext";

function BookItem({ oneBook }) {
  //   console.log(oneBook);
  let favCtx = useContext(favContext);

  function favHandler() {
    if (!favCtx.isFavourite(oneBook)) {
      favCtx.addFavourite(oneBook);
    } else {
      favCtx.deleteFavourite(oneBook.id);
    }
  }
  return (
    <li className="item">
      <Card>
        <div className="image">
          <img src={oneBook.image} />
        </div>
        <div className="content">
          <h3>{oneBook.title}</h3>
          <address>
            {oneBook.author?.prenom} {oneBook.author?.nom}
          </address>
          <p>{oneBook.publisher}</p>
          <strong>{oneBook.year}</strong>
        </div>
        <div className="actions">
          <div className="row">
            <div className="col-md-6 col-sm-4">
              <button onClick={favHandler}>
                {favCtx.isFavourite(oneBook)
                  ? "Remove from Favourites"
                  : "To Favourites"}
              </button>
            </div>
            <div className="col-md-3 col-sm-1">
              <button>
                <Pencil></Pencil>
              </button>
            </div>
            <div className="col-md-3 col-sm-1">
              <button>
                <Trash></Trash>
              </button>
            </div>
          </div>
        </div>
      </Card>
    </li>
  );
}

export default BookItem;
