import React from "react";
import "./Designs.css";
import { Link } from "wouter";

export default function Designs({ id, name, img, precio, urlImg, cat_id }) {
  return (
    <div id={id} key={id} className="content_product">
      <p className="item_Name">{name}</p>
      <img src={urlImg + img} alt={"Diseño " + name} />
      <div className="info_items">
        <p>{"S/. " + precio}</p>
        <Link
          to={"/design_detail/id=" + id + ":" + name + ":" + cat_id + ":" + id}
        >
          ver más
        </Link>
      </div>
    </div>
  );
}
