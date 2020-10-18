import { Slide } from "@material-ui/core";
import React from "react";
import { TopHeader, Typer } from "./Styles";

const Header = () => {
  const str = "STYLING & PHOTOGRAPHY COLLECTIVE";
  Typer.defaultProps = {
    theme: {
      stringLength: str.length + 3,
    },
  };
  return (
    <TopHeader>
      <Slide
        direction="left"
        in={true}
        timeout={1000}
        style={{ margin: 0, fontSize: 13, letterSpacing: 1 }}
      >
        <p> -DON'T</p>
      </Slide>
      <Typer>{str}</Typer>
    </TopHeader>
  );
};

export default Header;
