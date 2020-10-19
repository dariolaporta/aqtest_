import React, { Component } from "react";
import "./App.css";
import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import SlideScreen from "./components/SlideScreen/SlideScreen";
import StepIndicator from "./components/StepIndicator/StepIndicator";
import {
  palette,
  slidesArray,
  TOTAL_PROGRESS_CURSOR,
} from "./constants/constants";
import { AppWrapper } from "./Styles";
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
      progress: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
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
    const { viewWidth } = this.state;
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
        smallScreen={viewWidth < 500}
      />
    );
  };

  increaseIndex = () => {
    const count = this.state.activeIndex + 1;
    const total = slidesArray.length - 1;
    const interval = TOTAL_PROGRESS_CURSOR / total;
    const progress = this.state.progress + interval;
    this.setState((prevState) => {
      return {
        ...prevState,
        activeIndex:
          count < slidesArray.length ? count : this.state.activeIndex,
        progress:
          prevState.progress < TOTAL_PROGRESS_CURSOR
            ? progress
            : TOTAL_PROGRESS_CURSOR,
      };
    });
  };

  decreaseIndex = () => {
    const count = this.state.activeIndex - 1;
    const total = slidesArray.length - 1;
    const interval = TOTAL_PROGRESS_CURSOR / total;
    const progress = this.state.progress - interval;
    this.setState((prevState) => {
      return {
        ...prevState,
        activeIndex: count > 0 ? count : 0,
        progress: prevState.progress > 0 ? progress : 0,
      };
    });
  };

  render() {
    const { viewWidth } = this.state;
    AppWrapper.defaultProps = {
      theme: {
        justify: viewWidth > 500 ? "flex-end" : "center",
      },
    };
    return (
      <div className="App">
        <Header />
        {viewWidth > 1036 && <Cursor progress={this.state.progress} />}
        {this.renderSlide()}
        <AppWrapper className="app-wrapper">
          {this.renderIndicators()}
        </AppWrapper>
      </div>
    );
  }
}

export default App;
