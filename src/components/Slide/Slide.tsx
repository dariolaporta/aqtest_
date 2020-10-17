import React from "react";
import {
  CustomTitle,
  DivDx,
  DivSx,
  ImgDivDx,
  ImgDivSx,
  Paragraph,
  TitleContainer,
  TopImageContainer,
} from "./Styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

interface Props {
  big_image_url: string;
  bg_sx: string;
  bg_dx: string;
  custom_title: string;
  img_dx: string;
  img_sx: string;
  dx_text: {
    writer: string;
    date: string;
    link: string | Element;
  };
}

const Slide = (props: Props) => {
  const {
    big_image_url,
    bg_sx,
    bg_dx,
    img_dx,
    img_sx,
    custom_title,
    dx_text,
  } = props;
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
      <TopImageContainer>
        <img className="image" src={big_image_url} />
      </TopImageContainer>
      <DivSx color={bg_dx}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}>
          <ImgDivSx className="image" />
        </div>
      </DivSx>
      <DivDx style={{ display: "flex", flex: 1 }} color={bg_sx}>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            marginRight: 30,
          }}
        >
          <ImgDivDx className="image" />
        </div>
        <div style={{ flex: 1 }}></div>
        <div
          style={{
            flex: 1,
            color: "white",
            textAlign: "right",
            padding: 30,
          }}
        >
          <Paragraph>{dx_text.writer}</Paragraph>
          <Paragraph>{dx_text.date}</Paragraph>
          <div>
            <Paragraph
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              {dx_text.link} <ArrowRightAltIcon style={{ marginLeft: 10 }} />
            </Paragraph>
          </div>
        </div>
      </DivDx>
    </div>
  );
};

export default Slide;
