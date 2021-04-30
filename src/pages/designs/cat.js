import React from "react";
import DesignCat from "components/designs/designCat";

export default function Designs_detail({params}) {
  const { Dtitle } = params;
  const title = Dtitle.replace(/%20/g, " ");
  const {catid} = params;
  return (
    <div className="content">
          <DesignCat title={title} catid={catid}/>
    </div>
  );
}
