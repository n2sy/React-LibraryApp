import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogCtx = createContext({
  isLogged: false,
  login: () => {},
  logout: () => {},
  role: "",
  //   isConnected: () => {},
});

export function LoginContextProvider(props) {
  const [LoggedIn, setLoggedIn] = useState(true);
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  async function loginHandler(credentials) {
    // try {
    //   let response = await axios.post(
    //     "http://localhost:3000/auth/login",
    //     credentials
    //   );
    //   console.log("Login response:", response.data);
    //   localStorage.setItem("access_token", response.data["access_token"]);
    //   setRole(response.data["role"]);
    //   console.log("Before setIsLogged:", LoggedIn);
    //   setLoggedIn(true);
    //   console.log("After setIsLogged:", LoggedIn);
    //   navigate("/all-books");
    // } catch (err) {
    //   console.error("There was an error logging in:", err);
    //   setLoggedIn(false);
    // }
    axios
      .post("http://localhost:3000/auth/login", credentials)
      .then((response) => {
        console.log("Login response:", response.data);
        localStorage.setItem("access_token", response.data["access_token"]);
        setRole(response.data["role"]);
        console.log("Before setIsLogged:", LoggedIn);
        setLoggedIn(true);
        console.log("After setIsLogged:", LoggedIn);
        navigate("/all-books");
      })
      .catch((err) => {
        console.error("There was an error logging in:", err);
        setLoggedIn(false);
      });
  }

  function logoutHandler() {
    localStorage.removeItem("access_token");
    setRole("");
    setLoggedIn(false);
    navigate("/home");
  }

  //   function isConnected() {
  //     let token = localStorage.getItem("access_token");
  //     if (token) {
  //         setIsLogged(true);
  //     }
  //     setIsLogged(false);
  //   }

  let c = {
    isLogged: LoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    role: role,
    // isConnected: isConnected,
  };
  return <LogCtx.Provider value={c}>{props.children}</LogCtx.Provider>;
}

export default LogCtx;
