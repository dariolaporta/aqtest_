import React, { Component } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import ProgressRing from "./components/ProgressRing/ProgressRing";
import SlideScreen from "./components/SlideScreen/SlideScreen";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import { palette, slidesArray } from "./constants/constants";
import SlideObj from "./types";

interface State {
  activeIndex: number;
  viewWidth: number;
  progress: number;
}

interface Props {}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 0,
      viewWidth: 0,
      progress: 4,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);

    // emulating progress
    const interval = setInterval(() => {
      this.setState({ progress: this.state.progress + 10 });
      if (this.state.progress === 100) clearInterval(interval);
    }, 1000);
    return clearInterval(interval);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ viewWidth: window.innerWidth });
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
        key={index}
        color={this.state.activeIndex === index ? palette.orange : "white"}
        thickness={this.state.activeIndex === index ? 3 : 2}
        opacity={this.state.activeIndex === index ? 1 : 0.2}
      />
    ));
  };

  renderSlide = () => {
    const element = slidesArray[this.state.activeIndex];
    return (
      <SlideScreen
        big_image_url={element.big_image_url}
        bg_sx={element.bg_sx}
        bg_dx={element.bg_dx}
        img_dx={element.img_dx}
        img_sx={element.img_sx}
        custom_title={element.custom_title}
        dx_text={this.renderDxText(element)}
        increase={this.increaseIndex}
        decrease={this.decreaseIndex}
        activeIndex={this.state.activeIndex + 1}
        totalItems={slidesArray.length}
      />
    );
  };

  increaseIndex = () => {
    const count = this.state.activeIndex + 1;
    this.setState({ activeIndex: count < 5 ? count : this.state.activeIndex });
  };

  decreaseIndex = () => {
    const count = this.state.activeIndex - 1;
    this.setState({ activeIndex: count > 0 ? count : 0 });
  };

  render() {
    const { viewWidth } = this.state;
    return (
      <div className="App">
        <Header />
        <Cursor />
        {this.renderSlide()}
        <div
          style={{
            position: "fixed",
            right: 20,
            left: 0,
            display: "flex",
            justifyContent: viewWidth > 500 ? "flex-end" : "center",
            zIndex: 9999,
            bottom: 20,
          }}
        >
          {this.renderIndicators()}
        </div>
        {/* <div style={{ position: "absolute", zIndex: 9999, top: 0 }}>
          <ProgressRing radius={10} stroke={4} progress={this.state.progress} />
        </div> */}
      </div>
    );
  }
}

export default App;
