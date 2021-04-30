import React from "react";
import "styles/home/Home.css";
import { Route } from "wouter";
import Cat from "pages/designs/cat";
import Detail from "pages/designs/detail";
import formLogin from "pages/formUser/formLogin";
import formRegister from "pages/formUser/formRegister";
import DesignsIndex from "pages/designs";
import { DesignsContextProvider } from "context/DesignsContext";

export default function Home() {
  return (
    <main>
      <DesignsContextProvider>
        <Route path="">
          <DesignsIndex title={"BlackEdge"} />
        </Route>
        <Route
          component={Detail}
          path="/detail/:keyid::catid"
        />
        <Route component={Cat} path="/categoria/:Dtitle::catid" />
      </DesignsContextProvider>
      <Route path="/login" component={formLogin} />
      <Route path="/register" component={formRegister} />
    </main>
  );
}
