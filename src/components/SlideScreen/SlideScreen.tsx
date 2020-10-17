import React from "react";
import {
  CustomTitle,
  DivDx,
  DivSx,
  ImgDivDx,
  ImgDivSx,
  Paragraph,
  ParagraphTng,
  TitleContainer,
  TopImageContainer,
} from "./Styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Grow, Slide } from "@material-ui/core";

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

const SlideScreen = (props: Props) => {
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
        <Slide
          direction="right"
          in={true}
          mountOnEnter
          unmountOnExit
          timeout={1000}
        >
          <CustomTitle>{custom_title}</CustomTitle>
        </Slide>
      </TitleContainer>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1000}>
        <TopImageContainer>
          <img alt="main" className="image" src={big_image_url} />
        </TopImageContainer>
      </Slide>
      <DivSx color={bg_dx}>
        <div style={{ flex: 1 }}></div>
        <div style={{ flex: 1 }}></div>
        <Grow in={true} timeout={2000}>
          <div style={{ flex: 1 }}>
            <ImgDivSx className="image" />
          </div>
        </Grow>
      </DivSx>
      <DivDx style={{ display: "flex", flex: 1 }} color={bg_sx}>
        <Grow in={true} timeout={2000}>
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
        </Grow>
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
            <ParagraphTng>
              {dx_text.link}
              <ArrowRightAltIcon style={{ marginLeft: 10 }} />
            </ParagraphTng>
          </div>
        </div>
      </DivDx>
    </div>
  );
};

export default SlideScreen;
