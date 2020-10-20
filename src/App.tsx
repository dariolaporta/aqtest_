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
import { BottomWrapper } from "./Styles";
import SlideObj from "./types";

interface State {
  activeIndex: number;
  viewWidth: number;
  progress: number;
  loading: boolean;
  items: SlideObj[];
}

interface Props {}

class App extends Component<Props, State> {
  arrayOfImages = [
    `http://localhost:3000/oladimeji.jpg`,
    `http://localhost:3000/nicole.jpg`,
    `http://localhost:3000/pamela.jpg`,
    `http://localhost:3000/azamat.jpg`,
    `http://localhost:3000/kevin.jpg`,
  ];
  constructor(props: Props) {
    super(props);
    this.state = {
      activeIndex: 0,
      viewWidth: 0,
      progress: 0,
      loading: true,
      items: [],
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  async componentDidMount() {
    await this.cacheImages(this.arrayOfImages);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  cacheImages = async (srcArray: string[]) => {
    const promises = await srcArray.map((src) => {
      return new Promise((resolve, reject) => {
        const img: any = new Image();
        img.src = src;
        setTimeout(() => {
          img.onload = resolve();
          img.onerror = reject();
        }, 2000);
      });
    });
    await Promise.all(promises);
    this.setState({ loading: false, items: slidesArray });
  };

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
    const { viewWidth, items } = this.state;
    const element = items[this.state.activeIndex];
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
    const { items } = this.state;
    const count = this.state.activeIndex + 1;
    const total = items.length - 1;
    const interval = TOTAL_PROGRESS_CURSOR / total;
    const progress = this.state.progress + interval;
    this.setState((prevState) => {
      return {
        ...prevState,
        activeIndex: count < items.length ? count : 0,
        progress: count < items.length ? progress : 0,
      };
    });
  };

  decreaseIndex = () => {
    const { items } = this.state;
    const count = this.state.activeIndex - 1;
    const total = items.length - 1;
    const interval = TOTAL_PROGRESS_CURSOR / total;
    const progress = this.state.progress - interval;
    this.setState((prevState) => {
      return {
        ...prevState,
        activeIndex: count >= 0 ? count : total,
        progress: count >= 0 ? progress : TOTAL_PROGRESS_CURSOR,
      };
    });
  };

  render() {
    const { viewWidth, loading } = this.state;
    BottomWrapper.defaultProps = {
      theme: {
        justify: viewWidth > 500 ? "flex-end" : "center",
      },
    };
    console.log(loading);
    return (
      <>
        {loading && <div>loading....</div>}
        {!loading && (
          <div className="App">
            <Header />
            {viewWidth > 1036 && <Cursor progress={this.state.progress} />}
            {this.renderSlide()}
            <BottomWrapper>{this.renderIndicators()}</BottomWrapper>
          </div>
        )}
      </>
    );
  }
}

export default App;
