export default function Useractions(e) {
  e.preventDefault();
  const baseUrl = "http://localhost/API/users/";
  const dataRegister = document.getElementById("registerForm");
  const dataLogin = document.getElementById("loginForm");

  if (dataRegister) {
    const errorText1 = document.getElementById("passwordError");
    const errorText2 = document.getElementById("usernameError");
    const errorText3 = document.getElementById("emailError");

    errorText1.innerHTML = "";
    errorText2.innerHTML = "";
    errorText3.innerHTML = "";

    const usernameInputRegister = document.getElementById("usernameRegister");
    const emailInputRegister = document.getElementById("emailRegister");
    const passwordInputRegister = document.getElementById("passwordRegister");
    const cPasswordInputRegister = document.getElementById("cPasswordRegister");

    if (!usernameInputRegister.value.length) {
      errorText2.innerHTML = "Rellena todos los campos.";
      usernameInputRegister.focus();
    } else if (!emailInputRegister.value.length) {
      errorText2.innerHTML = "Rellena todos los campos.";
      emailInputRegister.focus();
    } else if (!passwordInputRegister.value.length) {
      errorText2.innerHTML = "Rellena todos los campos.";
      passwordInputRegister.focus();
    } else if (!cPasswordInputRegister.value.length) {
      errorText2.innerHTML = "Rellena todos los campos.";
      cPasswordInputRegister.focus();
    } else {
      document.getElementById("btn_submit_register").disable = false;
      let datos = new FormData(dataRegister);
      return fetch(baseUrl, {
        method: "POST",
        body: datos
      })
        .then(res => res.json())
        .then(data => {
          if (data === "Las contraseñas no coinciden.") {
            const errorText = document.getElementById("passwordError");
            errorText.innerHTML = data;
          } else if (data === "Este usuario ya se encuentra registrado.") {
            const errorText = document.getElementById("usernameError");
            errorText.innerHTML = data;
          } else if (data === "Este correo ya se encuentra registrado.") {
            const errorText = document.getElementById("emailError");
            errorText.innerHTML = data;
          } else {
            console.log(data);
          }
        });
    }
  }

  if (dataLogin) {
    const usernameInputLogin = document.getElementById("usernameLogin");
    const passwordInputLogin = document.getElementById("passwordLogin");
    const errorText1 = document.getElementById("errorUserLog");

    if (!usernameInputLogin.value.length) {
      errorText1.innerHTML = "Rellena todos los campos.";
      usernameInputLogin.focus();
    } else if (!passwordInputLogin.value.length) {
      errorText1.innerHTML = "Rellena todos los campos.";
      passwordInputLogin.focus();
    } else {
      let datos = new FormData(dataLogin);
      return fetch(baseUrl, {
        method: "POST",
        body: datos
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    }
  }
}
