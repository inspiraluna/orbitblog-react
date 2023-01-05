import React from "react";
import Frame23 from "../Frame23";
import "./Frame26.css";

function Frame26(props) {
  const { isTheDynamicIslandWorthIt } = props;

  return (
    <div className="frame-2">
      <p className="articleBox valign-text-middle sfprotext-regular-normal-black-20px">
        {isTheDynamicIslandWorthIt}
      </p>
      <Frame23 />
    </div>
  );
}

export default Frame26;
