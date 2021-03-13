import React from 'react';



export default function toggleTheme() {

let changeThemeBtn = document.getElementById('themeButton');
let tmp;

if (changeThemeBtn) {
  const themeMap = {
    dark: "light",
    light: "dark",
  };
  
  const theme = localStorage.getItem('theme') ||
    (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);
  
    function changeTheme(){

    const current = localStorage.getItem('theme');
    const next = themeMap[current];
  
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
  }

    changeThemeBtn.addEventListener('click', function(e){
      e.preventDefault();
      changeTheme();
    })
  }
}