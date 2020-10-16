import React, { useState } from "react";
import { Azamat } from "../../assets/images/images";
import { DivDx, DivSx } from "./Styles";

interface Props {
  url: string;
  bg_sx: string;
  bg_dx: string;
}

const Slide = (props: Props) => {
  const { url, bg_sx, bg_dx } = props;
  return (
    // <div>
    //   <img src={url} className="image" alt="logo" />

    // </div>
    <div style={{ display: "flex" }}>
      {/* <div style={{ flex: 1 }}>hey</div>
      <div style={{ flex: 1 }}>hey</div> */}
      {/* <DivDx bg_dx={bg_dx} /> */}
      <DivDx color={bg_dx} />
      <DivSx color={bg_sx} />
    </div>
  );
};

export default Slide;
