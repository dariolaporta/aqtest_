import React from "react";
import SlideObj from "../../types";
import { Indicator } from "./Styles";

interface Props {
  items?: SlideObj[];
  color?: string;
  thickness: number;
  opacity: number;
  translate: string;
  isBeforePresent: boolean;
}

const StepIndicator = (props: Props) => {
  const { color, thickness, opacity, translate, isBeforePresent } = props;

  Indicator.defaultProps = {
    theme: {
      thickness: thickness,
      opacity: opacity,
      translate: translate,
      isBeforePresent: isBeforePresent,
    },
  };

  return <Indicator color={color} />;
};

export default StepIndicator;
