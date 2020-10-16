import React from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import {
  Azamat,
  Pamela,
  Oladimeji,
  Kevin,
  Nicole,
} from "./assets/images/images";
import SlideObj from "./types";
import palette from "./constants/constants";

const slidesArray: SlideObj[] = [
  {
    big_image_url: Oladimeji,
    custom_title: "Everyday Flowers",
    bg_sx: palette.bg_primary,
    bg_dx: palette.bg_sand,
    img_dx: Pamela,
    img_sx: Nicole,
  },
  {
    big_image_url: Pamela,
    custom_title: "The wilder night",
    bg_dx: palette.bg_leaves,
    bg_sx: palette.bg_primary,
    img_dx: Kevin,
    img_sx: Oladimeji,
  },
  {
    big_image_url: Kevin,
    custom_title: "Smooth Memories",
    bg_dx: palette.bg_sand,
    bg_sx: palette.bg_primary,
    img_dx: Azamat,
    img_sx: Kevin,
  },
  {
    big_image_url: Azamat,
    custom_title: "Future Inverse",
    bg_dx: palette.bg_pink,
    bg_sx: palette.bg_primary,
    img_dx: Nicole,
    img_sx: Kevin,
  },
  {
    big_image_url: Nicole,
    custom_title: "Born Urban",
    bg_dx: palette.bg_brown,
    bg_sx: palette.bg_primary,
    img_dx: Oladimeji,
    img_sx: Azamat,
  },
];

function App() {
  const renderSlides = () => {
    return slidesArray.map((slide) => (
      <Slide
        url={slide.big_image_url}
        bg_sx={slide.bg_sx}
        bg_dx={slide.bg_dx}
      />
    ));
  };

  return <div className="App">{renderSlides()}</div>;
}

export default App;
