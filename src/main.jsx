import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { LoginContextProvider } from "./store/LoginContext.jsx";
import { FavContextProvider } from "./store/FavouriteContext";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoginContextProvider>
      <FavContextProvider>
        <App />
      </FavContextProvider>
    </LoginContextProvider>
  </BrowserRouter>
);
