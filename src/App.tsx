import React, { Component } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { palette, slidesArray } from "./constants/constants";
import SlideObj from "./types";

interface State {
  activeIndex: number;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 4,
    };
  }

  renderDxText = (slide: SlideObj) => {
    let obj = {
      writer: slide.dx_text.writer,
      date: slide.dx_text.date,
      link: slide.dx_text.link,
    };
    return obj;
  };

  renderIndicators = () => {
    return slidesArray.map((el, index) => (
      <StepIndicator
        color={this.state.activeIndex === index ? palette.orange : "white"}
        thickness={this.state.activeIndex === index ? 5 : 2}
        opacity={this.state.activeIndex === index ? 1 : 0.2}
      />
    ));
  };

  renderSlides = () => {
    const element = slidesArray[this.state.activeIndex];
    return (
      <Slide
        big_image_url={element.big_image_url}
        bg_sx={element.bg_sx}
        bg_dx={element.bg_dx}
        img_dx={element.img_dx}
        img_sx={element.img_sx}
        custom_title={element.custom_title}
        dx_text={this.renderDxText(element)}
      />
    );
  };
  render() {
    return (
      <div className="App">
        <Header />
        <Cursor />
        {this.renderSlides()}
        <div
          style={{
            position: "fixed",
            right: 20,
            left: 0,
            display: "flex",
            justifyContent: "flex-end",
            zIndex: 9999,
            bottom: 20,
          }}
        >
          {this.renderIndicators()}
        </div>
      </div>
    );
  }
}

export default App;
