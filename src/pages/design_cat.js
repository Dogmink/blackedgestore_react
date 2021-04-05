import React from "react";
import ItemContent from "../components/itemscontent";

export default function Designs_detail(props) {
  const { Dtitle } = props.params;
  const title = Dtitle.replace(/%20/g, " ");
  const { catid } = props.params;
  return (
    <div className="content">
        <p className="labelContent">{title}</p>
          <ItemContent catid={catid} catList={'1'}/>
      </div>
  );
}
