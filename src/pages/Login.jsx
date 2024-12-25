import React, { useContext, useEffect, useRef, useState } from "react";
import classes from "./Login.module.css";
import LogCtx from "../store/LoginContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const usernameRef = useRef("");
  const pwdRef = useRef("");
  const emailRef = useRef("");
  let ctx = useContext(LogCtx);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dans login", ctx);
  }, [ctx.isLogged]);

  async function submitHandler(event) {
    event.preventDefault();
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = pwdRef.current.value;
    const enteredEmail = emailRef.current.value;

    // if (isLogin) {
    //   let d = await
    await ctx.login({
      identifiant: enteredUsername,
      password: enteredPassword,
    });

    console.log("Aprés login", ctx);

    // } else {
    //   console.log("Registration");
    //   //   let d = await ctx.register({
    //   //     username: enteredUsername,
    //   //     email: enteredEmail,
    //   //     password: enteredPassword,
    //   //   });
    //   //   if (d.success) {
    //   //     setIsLogin(true);
    //   //   } else {
    //   //     console.log("Registration failed");
    //   //   }
    // }
  }

  return (
    <div>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="username">Username</label>
          <input ref={usernameRef} defaultValue="" type="text" id="username" />
        </div>
        {!isLogin && (
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input ref={emailRef} defaultValue="" type="email" id="email" />
          </div>
        )}
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input ref={pwdRef} defaultValue="" type="password" id="password" />
        </div>
        <div className={classes.actions}>
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </div>
      </form>
      <button onClick={() => setIsLogin((prevState) => !prevState)}>
        Switch to {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
}

export default Login;

// import React, { useContext, useEffect, useRef } from "react";
// import classes from "./Login.module.css";
// import LogCtx from "../store/LoginContext";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const usernameRef = useRef("");
//   const pwdRef = useRef("");
//   let ctx = useContext(LogCtx);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (ctx.isLogged) {
//       navigate("/all-books");
//     } else {
//       console.log("Login failed or user is not logged in.");
//     }
//   }, [ctx.isLogged]); // Ajouter navigate pour éviter les warnings de dépendance

//   async function submitHandler(event) {
//     event.preventDefault();
//     const enteredUsername = usernameRef.current.value;
//     const enteredPassword = pwdRef.current.value;
//     let d = await ctx.login({
//       identifiant: enteredUsername,
//       password: enteredPassword,
//     });

//     if (ctx.isLogged) {
//       navigate("/all-books");
//     } else {
//       console.log("Login failed");
//     }
//   }

//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//       <div className={classes.control}>
//         <label htmlFor="username">Username</label>
//         <input ref={usernameRef} defaultValue="" type="text" id="username" />
//       </div>
//       <div className={classes.control}>
//         <label htmlFor="password">Password</label>
//         <input ref={pwdRef} defaultValue="" type="password" id="password" />
//       </div>
//       <div className={classes.actions}>
//         <button type="submit">Login</button>
//       </div>
//     </form>
//   );
// }

// export default Login;
