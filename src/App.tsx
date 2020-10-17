import React, { Component } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import { slidesArray } from "./constants/constants";
import SlideObj from "./types";

class App extends Component {
  renderDxText = (slide: SlideObj) => {
    let obj = {
      writer: slide.dx_text.writer,
      date: slide.dx_text.date,
      link: slide.dx_text.link,
    };
    return obj;
  };

  renderSlides = () => {
    return slidesArray.map((slide, index) => (
      <Slide
        key={index}
        big_image_url={slide.big_image_url}
        bg_sx={slide.bg_sx}
        bg_dx={slide.bg_dx}
        img_dx={slide.img_dx}
        img_sx={slide.img_sx}
        custom_title={slide.custom_title}
        dx_text={this.renderDxText(slide)}
      />
    ));
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Cursor />
        {this.renderSlides()}
      </div>
    );
  }
}

export default App;
