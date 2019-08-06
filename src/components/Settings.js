import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  InputGroup,
  FormControl,
  Button,
  ListGroup
} from "react-bootstrap";
import { connect } from "react-redux";
import { SketchPicker } from "react-color";
import * as color from "../messages/colors";
import CustomPicker from "../components/CustomPicker";
import { addNewCategory, changeColor } from "../actions/index";

class Settings extends Component {
  state = {
    category: "",
    displayColorPicker: false
  };
  colorsArray = [color.FIRST_COLOR];
  handleOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleButtonClick = () => {
    const categoryState = this.state.category;
    this.props.addNewCategory(categoryState);
  };
  handleDisplayPicker = () => {
    this.setState({ displayColorPicker: true });
  };
  changeCurrentColor = (id, key) => {
    console.log(id);
    console.log(key);
    this.setState({ color: id });
    this.props.changeColor({ id, key });
  };
  render() {
    return (
      <Container>
        <div style={{ paddingLeft: "200px", paddingRight: "200px" }}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1">Your Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon2">
                Notes Category
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              name="category"
              placeholder="Add new category"
              aria-label="Add new category"
              aria-describedby="basic-addon2"
              onChange={this.handleOnChange}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={this.handleButtonClick}
              >
                Add Category
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <ListGroup>
            <ListGroup.Item variant="dark">
              <b>Current Categories</b>
            </ListGroup.Item>
            {this.props.settings.categories.map((category1, key) => (
              <ListGroup.Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <span> {category1.name}</span>
                <span>
                  <CustomPicker
                    idCategory={key}
                    color={category1.color}
                    changeCurrentColor={this.changeCurrentColor}
                  />
                </span>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { settings: state.settings };
};
function mapDispatchToProps(dispatch) {
  return {
    addNewCategory: category => dispatch(addNewCategory(category)),
    changeColor: color => dispatch(changeColor(color))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
