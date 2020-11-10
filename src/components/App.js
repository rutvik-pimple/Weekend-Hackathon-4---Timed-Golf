import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      time: 0,
      x: 0,
      y: 0,
      ballPosition: {
        left: "0px",
        top: "0px"
      }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }
  buttonClickHandler() {
    this.setState({ renderBall: true });
    document.addEventListener("keydown", this.handleKey);
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }

  renderChoice() {
    return (
      <div>
        <div className="ball" style={this.state.ballPosition}></div>
        <div className="hole"></div>
        <div className="heading-timer">{this.state.time}</div>

        <button
          className="start ballProvider"
          onClick={this.buttonClickHandler}
        >
          Click For Start
        </button>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.interval);
      document.removeEventListener("keydown", this.handleKey);
    }
  }

  handleKey(event) {
    if (event.keyCode === 39) {
      this.setState({ x: this.state.x + 5 }, () =>
        this.setState({
          ballPosition: {
            left: this.state.x + "px",
            top: this.state.y + "px"
          }
        })
      );
    } else if (event.keyCode === 40) {
      this.setState({ y: this.state.y + 5 }, () =>
        this.setState({
          ballPosition: {
            left: this.state.x + "px",
            top: this.state.y + "px"
          }
        })
      );
    } else if (event.keyCode === 38) {
      this.setState({ y: this.state.y - 5 }, () =>
        this.setState({
          ballPosition: {
            left: this.state.x + "px",
            top: this.state.y + "px"
          }
        })
      );
    } else if (event.keyCode === 37) {
      this.setState({ x: this.state.x - 5 }, () =>
        this.setState({
          ballPosition: {
            left: this.state.x + "px",
            top: this.state.y + "px"
          }
        })
      );
    }
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default Timer;
