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
import { addNewCategory } from "../actions/index";

class Settings extends Component {
  state = {
    category: ""
  };
  handleOnChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleButtonClick = () => {
    const categoryState = this.state.category;
    this.props.addNewCategory(categoryState);
  };
  render() {
    return (
      <Container>
        {this.props.settings.firstTime ? (
          <Jumbotron fluid style={{ padding: "20px" }}>
            <h1>Welcome to your profile</h1>
            <p>This is your first time here!</p>
            <p>You can build up your profile here and make your own settings</p>
          </Jumbotron>
        ) : (
          <div />
        )}
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
            {this.props.settings.categories.map(category1 => (
              <ListGroup.Item>{category1}</ListGroup.Item>
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
    addNewCategory: category => dispatch(addNewCategory(category))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
