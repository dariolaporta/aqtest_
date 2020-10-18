import React, { Component } from "react";

interface Props {
  radius: number;
  stroke: number;
  progress: number;
}

export default class ProgressRing extends Component<Props, {}> {
  normalizedRadius: number;
  circumference: number;
  constructor(props: Props) {
    super(props);

    const { radius, stroke } = this.props;

    this.normalizedRadius = radius - stroke * 2;
    this.circumference = this.normalizedRadius * 2 * Math.PI;
  }

  render() {
    const { radius, stroke, progress } = this.props;

    const strokeDashoffset =
      this.circumference - (progress / 100) * this.circumference;

    return (
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#ebdc58"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={this.circumference + " " + this.circumference}
          style={{ strokeDashoffset }}
          r={this.normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
    );
  }
}
