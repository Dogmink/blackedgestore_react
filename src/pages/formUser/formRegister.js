import React from "react";
import { Link } from "wouter";
import 'styles/userForm/UserSession.css';
import Useractions from "functions/userActions";

export default function formUserLog() {
  return (
    <div className="formUserLogContent" id="contentRegister">
      <p className="labelFormLog">Registrarse</p>
      <form id="registerForm">
        <p id="usernameError"></p>
        <input
          type="text"
          className="inputFormLog"
          required
          id="usernameRegister"
          name="username"
          placeholder="Nombre de usuario"
        />
        <input
          type="password"
          className="inputFormLog"
          id="passwordRegister"
          required
          name="password"
          placeholder="•••••••••"
        />
        <p id="passwordError"></p>
        <input
          type="password"
          className="inputFormLog"
          placeholder="•••••••••"
          id="cPasswordRegister"
          required
          name="cPassword"
        />
        <p id="emailError"></p>
        <input
          type="email"
          className="inputFormLog"
          id="emailRegister"
          placeholder="email@email.com"
          required
          name="email"
        />
        <input type="hidden" name="METHOD" value="REGISTER" />
        <button
          id="btn_submit_register"
          onClick={Useractions}
          className="submitFormLog"
        >
          Registrarse
        </button>
        <p>
          Si tienes cuenta, <Link to="/login">haz click aquí</Link>
        </p>
      </form>
    </div>
  );
}
