import React, { useState } from 'react'

const DesignsContext = React.createContext({})

export function DesignsContextProvider ({ children }) {
    const [designs, setDesigns] = useState([])
    return <DesignsContext.Provider value={{ designs, setDesigns }}>
        {children}
    </DesignsContext.Provider>
}

export default DesignsContext