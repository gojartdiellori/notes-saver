import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";

class Modali extends Component {
  state = {
    title: null,
    text: null
  };
  handelOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleData(this.state.title, this.state.text);
  };

  render() {
    return (
      <Modal
        show={this.props.buttonIsClicked}
        onHide={this.props.handleOnHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
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
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer />
      </Modal>
    );
  }
}

export default Modali;
