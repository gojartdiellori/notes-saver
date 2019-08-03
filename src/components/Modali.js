import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { CirclePicker } from "react-color";
import { validateTitle } from "../utils/validate";
import { ERROR_VALIDATE } from "../messages/index";
class Modali extends Component {
  state = {
    title: null,
    text: null,
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
      this.props.handleData(this.state.title, this.state.text, this.state.bg);
    } else {
      this.setState({ errors: this.state.errors.concat(ERROR_VALIDATE) });
    }
  };
  handleChangeComplete = (color, event) => {
    this.setState({ bg: color.hex });
    console.log(this.state.bg);
  };
  render() {
    return (
      <Modal
        show={this.props.buttonIsClicked}
        onHide={this.props.handleOnHide}
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
            <CirclePicker
              colors={["#f44336", "#e91e63", "#607d8b"]}
              onChangeComplete={this.handleChangeComplete}
            />
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

export default Modali;
