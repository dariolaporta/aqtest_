import React from "react";
import SlideObj from "../../types";
import { Indicator } from "./Styles";

interface Props {
  items?: SlideObj[];
  color?: string;
  thickness: number;
  opacity: number;
}

const StepIndicator = (props: Props) => {
  const { color, thickness, opacity } = props;

  Indicator.defaultProps = {
    theme: {
      thickness: thickness,
      opacity: opacity,
    },
  };

  return <Indicator color={color} />;
};

export default StepIndicator;
