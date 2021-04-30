import React, {useEffect} from 'react';
import 'styles/nav/nav.css';
import Svg from './svg.js';
import toggleTheme from 'functions/toggletheme';
import toggleIcons from 'functions/toggleicons';
import {Link} from 'wouter'


export default function ItemNav ({IconName, logo, name, specialBtn, clasesNombre, dinamicID, liName, spanName, cat, catid}){
    useEffect(function(){
      toggleTheme();
      toggleIcons();
    },[])

    if(logo === '1'){
    return (
        <li className="logo">
          <Link to="/" className="nav-link">
            <span className="link-text logo-text">{name}</span>
            <Svg nameSvg={IconName} />
          </Link>  
        </li>
      );
    }else if(specialBtn === '2'){
      return(
        <li name={liName} className={clasesNombre}>
          <a href="/#" className="nav-link" id={dinamicID} name='menu'>
            <Svg nameSvg={IconName} />
            <span name={spanName} className="link-text FadeInRight">{IconName}</span>
          </a>
        </li>
      );
    }else if(specialBtn === '1'){
      return(
      <li className={clasesNombre}>

        <Link to="/shopping-cart" className="nav-link">
          <Svg nameSvg={'Carrito'} />
          <span className="link-text">Carrito</span>
        </Link>
        <Link to={'/login'} className="nav-link">
          <Svg nameSvg={'LoginReg'}/>
        <span className="link-text">Login / Register</span>
        </Link>
        <a href="/#" className="nav-link"  id="themeButton">
          <Svg nameSvg={IconName}/>
            <span className="link-text">{IconName}</span>
        </a>
      </li>
        );
    }else{
      return (
        <li name={liName} className={clasesNombre}>
          <Link href={'/categoria/'+IconName+':'+catid} className="nav-link">
            <Svg nameSvg={IconName} />
            <span name={spanName} className="link-text FadeInRight">{IconName}</span>
          </Link>
        </li>
      );
    }
}
