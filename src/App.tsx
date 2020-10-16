import React from "react";
import "./App.css";
import Slide from "./components/Slide/Slide";
import { slidesArray } from "./constants/constants";

function App() {
  const renderSlides = () => {
    return slidesArray.map((slide, index) => (
      <Slide
        key={index}
        big_image_url={slide.big_image_url}
        bg_sx={slide.bg_sx}
        bg_dx={slide.bg_dx}
        img_dx={slide.img_dx}
        img_sx={slide.img_sx}
        custom_title={slide.custom_title}
      />
    ));
  };

  return <div className="App">{renderSlides()}</div>;
}

export default App;
