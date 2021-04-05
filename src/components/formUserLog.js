import React from "react";
import { Link } from "wouter";

export default function formUserLog({formname}) {
  if (formname ==='login') {
    return (
      <div className="formUserLogContent">
        <p className="labelFormLog">{formname}</p>
        <form>
          <input type="text" className='inputFormLog' placeholder="Nombre de usuario"/>
          <input type="password" className='inputFormLog' placeholder="•••••••••"/>
          <button className="submitFormLog">Entrar</button>
          <p>Si no tienes cuenta, <Link to="/user/register">haz click aquí</Link></p>
        </form>
      </div>
    );
  }
  return (
    <div className="formUserLogContent">
      <p className="labelFormLog">{formname}</p>
      <form>
        <input type='text' className='inputFormLog' placeholder="Nombre de usuario"/>
        <input type='email' className='inputFormLog' placeholder="email@email.com"/>
        <input type='password' className='inputFormLog' placeholder="•••••••••"/>
        <input type='password'className='inputFormLog' placeholder="•••••••••"/>
        <button className="submitFormLog">Registrar</button>
        <p>Si tienes cuenta, <Link to="/user/login">haz click aquí</Link></p>
      </form>
    </div>
  );
}
