import React from 'react';
import './nav.js';
import './nav.css';
import ItemNav from './item-nav';

export default function Nav(){
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
            <ItemNav IconName={'logo'} logo={'1'} name={'BlackEdge'} />
            <ItemNav IconName={'Productos'} clasesNombre={'nav-item'} />
            <ItemNav IconName={'FAQ'} clasesNombre={'nav-item'} />
            <ItemNav IconName={'Volver'} clasesNombre={'nav-sub-item'} />
            <ItemNav IconName={'Dark Art'} clasesNombre={'nav-sub-item'} />
            <ItemNav IconName={'Japan Art'} clasesNombre={'nav-sub-item'} />
            <ItemNav IconName={'Aesthetic Art'} clasesNombre={'nav-sub-item'} />
            <ItemNav IconName={'Misc'} clasesNombre={'nav-sub-item'} />
            <ItemNav IconName={'Theme'} specialBtn={'1'} clasesNombre={'nav-item'}/>
            </ul>
        </nav>
    );
}
