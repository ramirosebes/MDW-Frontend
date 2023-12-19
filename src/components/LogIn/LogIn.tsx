import React, { useState, FormEvent } from "react";
import { auth } from "../../firebase.ts";
import { signInWithEmailAndPassword, UserCredential, getIdToken } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./logIn.css";

const Login = () => {
  localStorage.removeItem("token");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Obtén el token de acceso utilizando getIdToken
      const idToken = await getIdToken(userCredential.user);

      console.log(idToken);

      localStorage.setItem("token", idToken);

      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="loginDivContainer">
      <div className="loginDiv">
        <h2 className="loginTitle">Login Page</h2>
        <form onSubmit={handleSubmit} className="loginForm">
          <label className="loginLabel" htmlFor="loginEmail">
            Email:
          </label>
          <input
            className="loginInput"
            id="loginEmail"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="loginLabel" htmlFor="loginEmail">
            Password:
          </label>
          <input
            className="loginInput"
            id="loginPassword"
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="loginButton">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
