import React from "react";
import {
  CustomTitle,
  DivDx,
  DivSx,
  ImgDivDx,
  ImgDivSx,
  TitleContainer,
} from "./Styles";

interface Props {
  big_image_url: string;
  bg_sx: string;
  bg_dx: string;
  custom_title: string;
  img_dx: string;
  img_sx: string;
}

const Slide = (props: Props) => {
  const { big_image_url, bg_sx, bg_dx, img_dx, img_sx, custom_title } = props;
  ImgDivSx.defaultProps = {
    theme: {
      img_sx: img_sx,
    },
  };

  ImgDivDx.defaultProps = {
    theme: {
      img_dx: img_dx,
    },
  };

  CustomTitle.defaultProps = {
    theme: {
      custom_title: custom_title,
    },
  };

  return (
    <div style={{ display: "flex", flex: 1, position: "relative" }}>
      <TitleContainer>
        <CustomTitle>{custom_title}</CustomTitle>
      </TitleContainer>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <img className="image" src={big_image_url} />
      </div>
      <DivSx color={bg_dx}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}>
          <ImgDivSx />
        </div>
      </DivSx>
      <DivDx color={bg_sx}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}>
          <ImgDivDx />
        </div>
      </DivDx>
    </div>
  );
};

export default Slide;
