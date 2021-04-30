import React from "react"
import { UseDesigns } from "hooks/useDesigns"
import Svg from "components/nav/svg"
import ListOfDesigns from "./ListOfDesigns"
import useGlobalDesigns from 'hooks/GlobalsDesigns'


export default function DesignCat({ title, catid, keyid}) {
    const { loading } = UseDesigns({ keyid })
    const designs = useGlobalDesigns()
    const designsCat = designs.filter(singleDesign =>  singleDesign.cat_id === catid)
  return (
    <>
      <p className="labelContent">{title}</p>
      <div className="itemsContent grid-content">
        {loading ? (
          <Svg nameSvg={"logoLoading"} />
        ) : (
          <ListOfDesigns designs={designsCat} />
        )}
      </div>
    </>
  )
}
