import React, { useState } from "react";
import styled from "styled-components";

const StepIndicator = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const Div = styled.div`
    width: 100px;
    height: 10px;
    background-color: white;
  `;

  return <Div />;
};
