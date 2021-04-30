import React from "react";
import "styles/designs/designDetail.css";

export default function DesignItemDetail({
  id,
  name,
  img,
  precio,
  cat_id,
  design_desc
}) {
  const urlImg = "https://blackedgestore.com/images/";

  return (
    <div className="content">
      <p className="labelContent">{name}</p>
      <div className="itemsContentDetail">
        <div key={id} className="contentDesignDetail grid-content">
          <div className="designDetailContentImg">
            <img src={urlImg + img} alt={"Diseño" + name} />
          </div>
          <div className="designDetailContentDesc">
            <label>Descripción</label>
            <textarea
              rows="5"
              cols="35"
              readOnly="readonly"
              value={design_desc}
            />
            <br />
            <div className="designDetailCompra">
              <p>{"S/. " + precio}</p>
              <a href="/#">Comprar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
