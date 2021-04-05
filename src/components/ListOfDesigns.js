import React, { useEffect, useState } from "react";
import Designs from "./Designs";
import getDesigns from "../functions/getDesigns";
import ItemsCount from "./itemsCount";

export default function ListOfDesigns({
  pages,
  catid,
  itemid,
  catList,
  keyid = ""
} = {}) {
  const [designs, setDesigns] = useState([]);

  

  useEffect(
    function () {
      getDesigns({ keyid: keyid }).then(designs => setDesigns(designs));
    },
    [keyid]
  );

  const urlImg = "https://blackedgestore.com/images/";

  if (pages === "count") {
    return designs.map(({ id }) => (
      <div key={id} className="trashdiv">
        <ItemsCount id={id} />
      </div>
    ));
  }

  if (pages === "countRel") {
    return designs
      .filter(items => items.id !== Number.parseInt(itemid) && items.cat_id === Number.parseInt(catid))
      .map(({ id }) => (
        <div key={id} className="trashdiv">
          <ItemsCount id={id} />
        </div>
      ));
  }

  if (itemid) {
    return designs
      .filter(item => item.id !== Number.parseInt(itemid) && item.cat_id === Number.parseInt(catid))
      .map(({ id, name, img, precio, cat_id }) => (
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
  if (catList === "1") {
    if (catid!=="all") {   
      return designs
        .filter(item => item.cat_id === Number.parseInt(catid))
        .map(({ id, name, img, precio, cat_id }) => (
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
