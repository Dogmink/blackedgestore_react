import React from "react"
import DesignsRel from "components/designs/designRel"
import DesignDetail from "components/designs/designDetail"
import "styles/designs/detail.css"
import useGlobalGifs from "hooks/GlobalsDesigns"

export default function Detail({ params }) {
  const designs = useGlobalGifs()
  const design = designs.find(singleDesign => singleDesign.id === params.keyid)
  return (
    <div className="content">
        <DesignDetail {...design} />
        <DesignsRel title={'Relacionado'} catid={params.catid} itemid={params.keyid} />
    </div>
  );
}
