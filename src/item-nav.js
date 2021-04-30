import React, {useEffect, useState} from 'react';
import '@components/nav/item-nav.js';
import '@styles/nav/nav.css';
import Svg from '@components/designs/svg.js';
import toggleTheme from '@functions/toggletheme';


export default function ItemNav ({IconName, logo, name, specialBtn, clasesNombre}){
    useEffect(function(){
      toggleTheme();
    },[])

    if(logo === '1'){
    return (
        <li name="li-secondary" className="logo">
          <a href="/#" className="nav-link">
            <span name="secondary-span-item" className="link-text logo-text">{name}</span>
            <Svg nameSvg={IconName} />
          </a>
        </li>
      );
    }else if(specialBtn === '1'){
      return(

      
      <li className={clasesNombre}>

      <a href="shopping-cart.php" className="nav-link">
          <Svg nameSvg={'Carrito'} />
          <span className="link-text">Carrito</span>
        </a>
        <a href="register.php" className="nav-link">
          <Svg nameSvg={'LoginReg'}/>
        <span className="link-text">Login / Register</span>
        </a>
        <a href="/#" className="nav-link"  id="themeButton">
          <Svg nameSvg={IconName}/>
            <span className="link-text">{IconName}</span>
        </a>
      </li>
        );
    }else{
      return (
        <li name="li-secondary" className={clasesNombre}>
          <a href="/#" className="nav-link">
            <Svg nameSvg={IconName} />
            <span name="secondary-span-item" className="link-text FadeInRight">{IconName}</span>
          </a>
        </li>
      );
    }
}
