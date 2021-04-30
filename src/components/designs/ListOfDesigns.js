import React from "react";
import Designs from "./Designs";
export default function ListOfDesigns({ designs } = {}) {
  const urlImg = "https://blackedgestore.com/images/"

  return designs.map(({ id, name, img, precio, cat_id }) => (
    <div key={id}>
      <Designs
        key={id}
        id={id}
        name={name}
        img={img}
        precio={precio}
        cat_id={cat_id}
        urlImg={urlImg}
      />
    </div>
  ));
}
