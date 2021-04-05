import React from "react";
import "./Main.css";
import ItemContent from "../components/itemscontent";
import { Route } from "wouter";
import Designs_detail from "./design_detail";
import Design_cat from "./design_cat";
import UserSession from "./UserSession";

export default function Main() {
  return (
    <main>
      <Route path="">
        <ItemContent title={"BlackEdge"} />
      </Route>
      <Route path="/home">
        <ItemContent title={"BlackEdge"} />
      </Route>
      <Route
        component={Designs_detail}
        path="/design_detail/:keyid::Dtitle::catid::itemid"
      />
      <Route path="/user/:formname" component={UserSession} />
      <Route component={Design_cat} path="/categoria/:Dtitle::catid" />
    </main>
  );
}
