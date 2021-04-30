import {useContext} from 'react'
import DesignsContext from 'context/DesignsContext'

export default function useGlobalDesigns(){
    const {designs} = useContext(DesignsContext)
    return designs
}
