import React, { Component } from "react";
import "../styles/custompicker.css";
import { connect } from "react-redux";

import * as color from "../messages/colors";

class CustomPicker extends Component {
  state = {
    color: this.props.color
  };
  handleClick = e => {
    e.preventDefault();

    const id = e.currentTarget.dataset.id;
    this.setState({ color: id });
    const idCategory = this.props.idCategory;

    this.props.changeCurrentColor(id, idCategory);
  };
  render() {
    const colorsArray = [
      color.FIRST_COLOR,
      color.SECOND_COLOR,
      color.THIRD_COLOR,
      color.FOURTH_COLOR,
      color.FIFTH_COLOR,
      color.SIXTH_COLOR
    ];
    return (
      <div
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        {colorsArray.map((coli, key) => (
          <div
            data-id={coli}
            onClick={this.handleClick}
            className={
              coli === this.state.color
                ? "custompicker selected"
                : "custompicker"
            }
            style={{ backgroundColor: coli }}
          />
        ))}
      </div>
    );
  }
}

export default CustomPicker;
