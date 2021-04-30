import React from 'react'
import {UseDesigns} from 'hooks/useDesigns'
import useGlobalDesigns from 'hooks/GlobalsDesigns'
import Svg from 'components/nav/svg'
import ListOfDesigns from './ListOfDesigns'


export default function DesignRel({ title, keyid, catid, itemid }){
    const { loading } = UseDesigns({ keyid })
    const designs = useGlobalDesigns()
    const designsCat = designs.filter(singleDesign => singleDesign.cat_id === catid && singleDesign.id !== itemid)
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