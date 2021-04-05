import React from "react";
import "./itemscontent.css";
import ListOfDesigns from "./ListOfDesigns";

export default function ItemContent({ title, catid, itemid, catList }) {
  if (catList === '1') {
    return (
      <div className="content">
        <div className="itemsContent grid-content">
          <ListOfDesigns catid={catid} catList={catList} />
        </div>
        <div className="contentCount">
          <ListOfDesigns catid={catid} pages={"countRel"} catList={catList} />
        </div>
      </div>
    );
  }
  if (catid) {
    return (
      <div className="content">
        <p className="labelContent">{title}</p>
        <div className="itemsContent grid-content">
          <ListOfDesigns catid={catid} itemid={itemid} />
        </div>
        <div className="contentCount">
          <ListOfDesigns pages={"countRel"} catid={catid} itemid={itemid} />
        </div>
      </div>
    );
  }
  return (
    <div className="content">
      <p className="labelContent">{title}</p>
      <div className="itemsContent grid-content">
        <ListOfDesigns />
      </div>
      <div className="contentCount">
        <ListOfDesigns pages={"count"} />
      </div>
    </div>
  );
}
