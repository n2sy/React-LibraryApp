import React, { useContext } from "react";
import classes from "./navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import LogCtx from "../store/LoginContext";
import favContext from "../store/FavouriteContext";

function Navbar() {
  let ctx = useContext(LogCtx);
  let favCtx = useContext(favContext);

  if (ctx.isLogged) {
    if (ctx.role == "user") {
      return (
        <div className={classes.header}>
          <div className={classes.logo}>Bookstore</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/all-books">All Books</Link>
              </li>
              {/* <li>
              <NavLink
                style={({ isActive }) => ({
                  textDecoration: isActive ? "underline overline" : "none",
                })}
                to="/add-book"
              >
                Add Book
              </NavLink>
            </li> */}
              <li>
                <NavLink to="/favourites">
                  Favourites
                  <span
                    style={{ "margin-left": "1%" }}
                    class="position-absolute translate-middle badge rounded-pill bg-dark"
                  >
                    {favCtx.nbFavourites}
                  </span>
                  {/* {({ isActive }) => {
                    return (
                      <span className={isActive ? classes.activeclasse : ""}>
                        Favourites
                        <span className="badge badge-seondary">
                          {favCtx.nbFavourites}
                        </span>
                      </span>
                    );
                  }} */}
                </NavLink>
              </li>
              <li>
                <a href="#" onClick={ctx.logout}>
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else {
      return (
        <div className={classes.header}>
          <div className={classes.logo}>Bookstore</div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/admin-books">Books</Link>
              </li>
              <li>
                <Link to="/admin-authors">Authors</Link>
              </li>
              {/* <li>
                  <NavLink
                    style={({ isActive }) => ({
                      textDecoration: isActive ? "underline overline" : "none",
                    })}
                    to="/add-book"
                  >
                    Add Book
                  </NavLink>
                </li> */}

              <li>
                <a>Logout</a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  } else {
    return (
      <div className={classes.header}>
        <div className={classes.logo}>Bookstore</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? classes.activeclasse : ""
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
