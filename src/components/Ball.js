import React from "react";

// Styled Components
import { LottoBall } from "./styled-components";

const Ball = (props) => {
  const { num } = props;
  return(
    <LottoBall>
      <span>{num}</span>
    </LottoBall>
  )
}

export default Ball;