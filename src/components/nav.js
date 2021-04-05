import React from "react";
import "./nav.css";
import ItemNav from "./item-nav";
import "../functions/toggleicons";

export default function Nav() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <ItemNav IconName={"logo"} logo={"1"} name={"BlackEdge"} />
        <ItemNav
          spanName={"primary-span-item"}
          liName={"li-primary"}
          IconName={"Productos"}
          clasesNombre={"nav-item"}
          dinamicID={"btnProductos"}
          specialBtn={"2"}
        />
        <ItemNav
          spanName={"primary-span-item"}
          liName={"li-primary"}
          IconName={"FAQ"}
          clasesNombre={"nav-item"}
        />
        <ItemNav
          spanName={"secondary-span-item"}
          liName={"li-secondary"}
          IconName={"Volver"}
          clasesNombre={"nav-sub-item"}
          specialBtn={"2"}
          dinamicID={"backBtn"}
          name={"menu"}
        />
        <ItemNav
          spanName={"secondary-span-item"}
          liName={"li-secondary"}
          IconName={"Dark Art"}
          clasesNombre={"nav-sub-item"}
          catid={"3"}
        />
        <ItemNav
          spanName={"secondary-span-item"}
          liName={"li-secondary"}
          IconName={"Japan Art"}
          clasesNombre={"nav-sub-item"}
          catid={"4"}
        />
        <ItemNav
          spanName={"secondary-span-item"}
          liName={"li-secondary"}
          IconName={"Aesthetic Art"}
          clasesNombre={"nav-sub-item"}
          catid={"5"}
        />
        <ItemNav
          spanName={"secondary-span-item"}
          liName={"li-secondary"}
          IconName={"Misc"}
          clasesNombre={"nav-sub-item"}
          catid={"all"}
        />
        <ItemNav
          IconName={"Theme"}
          specialBtn={"1"}
          clasesNombre={"nav-item"}
        />
      </ul>
    </nav>
  );
}
