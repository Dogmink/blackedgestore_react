import React from "react";
import ItemContent from "../components/itemscontent";
import DesignItemDestail from "../components/designItemDetail";
import "./design_detail.css";

export default function Designs_detail(props) {
  const { Dtitle } = props.params;
  const title = Dtitle.replace(/%20/g, " ");
  const { keyid } = props.params;
  const { catid } = props.params;
  const { itemid } = props.params;
  return (
    <div className="content">
      <p className="labelContent">{title}</p>
      <div className="itemsContentDetail">
        <DesignItemDestail keyid={keyid} />
      </div>
      <ItemContent title={"Relacionado"} catid={catid} itemid={itemid} />
    </div>
  );
}
