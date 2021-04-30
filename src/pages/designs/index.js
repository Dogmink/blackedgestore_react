import React from "react";
import ListOfDesigns from "components/designs/ListOfDesigns";
import "styles/designs/IndexDesigns.css";
import Svg from "components/nav/svg";
import { UseDesigns } from "hooks/useDesigns";

export default function designsIndex({ title, keyid }) {
  const { loading, designs } = UseDesigns({ keyid });
  return (
    <div className="content">
      <p className="labelContent">{title}</p>
      <div className="itemsContent grid-content">
        {loading ? (
          <Svg nameSvg={"logoLoading"} />
        ) : (
          <ListOfDesigns designs={designs} />
        )}
      </div>
    </div>
  );
}