import React, { useEffect, useRef } from "react";
import {
  CaptionsWrapper,
  Count,
  CustomTitle,
  DivDx,
  DivSx,
  ImageWrapper,
  ImgDivDx,
  ImgDivSx,
  Paragraph,
  ParagraphTng,
  SlideWrapper,
  TitleContainer,
  TopImageContainer,
} from "./Styles";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Grow, Slide } from "@material-ui/core";
import { FlexElement } from "../../Styles";
import gsap from "gsap";

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
  increase: () => void;
  decrease: () => void;
  activeIndex: number;
  totalItems: number;
  smallScreen: boolean;
}

function SlideScreen(props: Props) {
  const {
    big_image_url,
    bg_sx,
    bg_dx,
    img_dx,
    img_sx,
    custom_title,
    dx_text,
    activeIndex,
    totalItems,
    smallScreen,
  } = props;

  const divSxAnimation = useRef(null);

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

  useEffect(() => {
    const animation = gsap.to(divSxAnimation.current, {
      width: "40%",
      duration: "2s",
    });
    animation.restart();
    console.log("asdasdas");
  }, [big_image_url]);

  return (
    <SlideWrapper>
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
        <Count>{activeIndex + "/" + totalItems}</Count>
      </TitleContainer>
      <TopImageContainer>
        <Grow in={true} timeout={2000}>
          <div style={{ color: "white" }}>
            <img alt="main" className="image" src={big_image_url} />
            {smallScreen && (
              <>
                <Paragraph>{dx_text.writer}</Paragraph>
                <Paragraph>{dx_text.date}</Paragraph>
                <div style={{ textAlign: "center" }}>
                  <ParagraphTng style={{ justifyContent: "center" }}>
                    {dx_text.link}
                    <ArrowRightAltIcon />
                  </ParagraphTng>
                </div>
              </>
            )}
          </div>
        </Grow>
      </TopImageContainer>
      <DivSx ref={divSxAnimation} color={bg_dx}>
        <FlexElement />
        <FlexElement />
        <Grow in={true} timeout={2000}>
          <FlexElement>
            <ImgDivSx
              className="image"
              onClick={() => props.decrease && props.decrease()}
            />
          </FlexElement>
        </Grow>
      </DivSx>
      <DivDx style={{ display: "flex", flex: 1 }} color={bg_sx}>
        {!smallScreen && (
          <Grow in={true} timeout={2000}>
            <ImageWrapper>
              <ImgDivDx
                className="image"
                onClick={() => props.increase && props.increase()}
              />
            </ImageWrapper>
          </Grow>
        )}
        <FlexElement />

        {smallScreen && (
          <>
            <FlexElement />
            <Grow in={true} timeout={2000}>
              <ImageWrapper>
                <ImgDivDx
                  className="image"
                  onClick={() => props.increase && props.increase()}
                />
              </ImageWrapper>
            </Grow>
          </>
        )}
        {!smallScreen && (
          <Slide in={true} direction="left" timeout={1000}>
            <CaptionsWrapper>
              <Paragraph>{dx_text.writer}</Paragraph>
              <Paragraph>{dx_text.date}</Paragraph>
              <div>
                <ParagraphTng>
                  {dx_text.link}
                  <ArrowRightAltIcon style={{ marginLeft: 10 }} />
                </ParagraphTng>
              </div>
            </CaptionsWrapper>
          </Slide>
        )}
      </DivDx>
    </SlideWrapper>
  );
}

export default SlideScreen;
