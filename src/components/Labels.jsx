import * as React from "react";
import { contrastText } from "../logic/logic";

const Labels= ({labelitem}) => (

<div
    className="label"
    style={{ backgroundColor: `#${labelitem.color}` }}
  >
    {labelitem.name}
  </div> 
);

export default Labels;
