import React from "react";
import "styles/designs/Designs.css"
import { Link } from "wouter";

export default function Designs({ id, name, img, precio, urlImg, cat_id }) {
  return (
    <div id={id} key={id} className="content_product">
      <p className="item_Name">{name}</p>
      <img src={urlImg + img} alt={"Diseño " + name} />
      <div className="info_items">
        <p>{"S/. " + precio}</p>
        <Link to={"/detail/" + id + ":" + cat_id}>
          ver más
        </Link>
      </div>
    </div>
  );
}
