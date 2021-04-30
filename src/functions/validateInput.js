export default function validarInput(){

    // =================inputs===================

  const usernameInputRegister = document.getElementById('usernameRegister').value.length
  const emailInputRegister = document.getElementById('emailRegister').value.length
  const passwordInputRegister = document.getElementById('passwordRegister').value.length
  const cPasswordInputRegister = document.getElementById('cPasswordRegister').value.length
  
    if (!usernameInputRegister && !emailInputRegister && !passwordInputRegister && !cPasswordInputRegister) {
      document.getElementById('btn_submit_register').disable = true;
    }else {
      document.getElementById('btn_submit_register').disable = false;
    }
  }