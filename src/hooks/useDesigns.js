import { useContext, useEffect, useState } from "react";
import DesignsContext from "context/DesignsContext";
import getDesigns from "functions/getDesigns";


export function UseDesigns({ keyid }) {
  const [loading, setLoading] = useState(false)
  const {designs, setDesigns} = useContext(DesignsContext)

  useEffect(
    function () {
      setLoading(true);
      const keywordToUse = keyid || "";
      getDesigns({ keyid: keywordToUse })
      .then(designs => {
        setDesigns(designs);
        setLoading(false);
      });
    },
    [keyid, setDesigns]
  )
  return { loading, designs };
}
