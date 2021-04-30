import React from "react";
import { Link } from "wouter";
import 'styles/userForm/UserSession.css';
import Useractions from "functions/userActions";

export default function formLogin() {
  return (
    <div className="formUserLogContent">
      <p className="labelFormLog">Ingresar</p>
      <form id="loginForm">
        <p id="errorUserLog"></p>
        <input
          type="text"
          className="inputFormLog"
          name="username"
          placeholder="Nombre de usuario"
          id='usernameLogin'
        />
        <input
          type="password"
          className="inputFormLog"
          name="password"
          placeholder="•••••••••"
          id="passwordLogin"
        />
        <input type="hidden" name="METHOD" value="LOGIN" />
        <button
          id="btn_submit_register"
          onClick={Useractions}
          className="submitFormLog"
        >
          Login
        </button>
        <p>
          Si no tienes cuenta, <Link to="/register">haz click aquí</Link>
        </p>
      </form>
    </div>
  );
}
