import { Slide } from "@material-ui/core";
import React from "react";
import { TopHeader, Typer } from "./Styles";

const Header = () => {
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
      <Typer>STYLING & PHOTOGRAPHY COLLECTIVE</Typer>
    </TopHeader>
  );
};

export default Header;
