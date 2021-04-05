import React, { useState, useEffect } from "react";
import getDesigns from "../functions/getDesigns";
import "./designItemDetail.css";

export default function DesignItemDetail({ keyid }) {
  const urlImg = "https://blackedgestore.com/images/";

  const [designs, setDesigns] = useState([]);
  useEffect(
    function () {
      getDesigns({ keyid: keyid }).then((designs) => setDesigns(designs));
    },
    [keyid]
  );

  return designs.map(({ id, name, img, design_desc, precio }) => (
    <div key={id} className="contentDesignDetail grid-content">
      <div className="designDetailContentImg">
        <img src={urlImg + img} alt={'Diseño' + name}/>
      </div>
      <div className="designDetailContentDesc">
        <label>Descripción</label>
        <textarea rows='5' cols='35' readOnly='readonly' value={design_desc} />
        <br />
        <div className='designDetailCompra'>
          <p>{"S/. " + precio}</p>
          <a href="/#">Comprar</a>
        </div>
      </div>
    </div>
  ));
}
