import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { CirclePicker } from "react-color";
import { validateTitle } from "../utils/validate";
import { ERROR_VALIDATE } from "../messages/index";
import { connect } from "react-redux";
import * as color from "../messages/colors";
import { notesClick } from "../actions";

class Modali extends Component {
  state = {
    title: null,
    text: null,
    boolean: false,
    category: null,
    bg: "white",
    errors: []
  };

  handelOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (validateTitle(this.state.title) !== ERROR_VALIDATE) {
      this.props.handleData(
        this.state.title,
        this.state.text,
        this.state.category
      );
    } else {
      this.setState({ errors: this.state.errors.concat(ERROR_VALIDATE) });
    }
  };
  handleChangeComplete = (color, event) => {
    this.setState({ bg: color.hex });
    console.log(event);
  };
  handleOnHide = () => {
    this.props.notesClicke(this.state.boolean);
  };
  handleSelect = e => {
    e.preventDefault();
    let object = JSON.parse(e.target.value);
    this.setState({ bg: object.color, category: object.name });
  };

  render() {
    return (
      <Modal
        show={this.props.notesClick}
        onHide={this.handleOnHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{ borderRadius: "2px" }}
      >
        <Modal.Header closeButton style={{ backgroundColor: this.state.bg }}>
          <Modal.Title>Add new note</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                size="lg"
                onChange={this.handelOnChange}
                type="text"
                placeholder="Enter your title"
              />
              {this.state.errors.map(error => (
                <p>{error}</p>
              ))}
            </Form.Group>
            <option value="" selected disabled hidden>
              Choose here
            </option>

            <Form.Group controlId="formBody">
              <Form.Label>Text</Form.Label>
              <Form.Control
                name="text"
                as="textarea"
                onChange={this.handelOnChange}
                size="lg"
                rows="3"
                placeholder="Your text goes here!"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>
                Category<span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control as="select" onChange={this.handleSelect}>
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                {this.props.categories.map(category => (
                  <option value={JSON.stringify(category)}>
                    {category.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <p style={{ color: "red", fontSize: "11px" }}>
              *Colors of notes will change depending of category choice, however
              you can change this default configuration on settings
            </p>
            <hr />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.settings.categories,
    notesClick: state.notesClick
  };
};
function mapDispatchToProps(dispatch) {
  return {
    notesClicke: boolean => dispatch(notesClick(boolean))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modali);
