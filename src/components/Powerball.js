import React from "react";

// Styled Components
import { PowerballStyle } from "./styled-components";

const Powerball = (props) => {
  const { num } = props;
  return(
    <PowerballStyle>
      <span>{num}</span>
    </PowerballStyle>
  )
}

export default Powerball;