import React from "react";
import "./ButtonTool.css";
import { Stop } from "../icons/iconsGol.tsx";

export default function ButtonTool(props) {
  return (
    <button className="button-57" {...props} type="button">
      {<span className="text">{props.children}</span>}
      {props.alttext ? <span>{props.alttext}</span> : <></>}
    </button>
  );
}
