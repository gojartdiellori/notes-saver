import React, { Component } from "react";
import NavBar from "./NavBar";
import Modal from "./Modali";
import { connect } from "react-redux";
import Notes from "./Notes";
import uuidv1 from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { addNotes } from "../actions/index";

class App extends Component {
  state = {
    buttonIsClicked: false,
    notes: []
  };

  componentWillMount() {
    const s = localStorage.getItem("store");
    if (s !== null) {
      const sParsed = JSON.parse(s);
      console.log(sParsed);
      this.setState(sParsed);
    } else {
      alert("empty");
    }
  }
  triggerButton = e => {
    e.preventDefault();
    this.setState({ buttonIsClicked: true });
  };
  handleOnHide = () => {
    this.setState({ buttonIsClicked: false });
  };
  handleData = (title, body) => {
    const id = uuidv1();
    this.props.addNotes({ id, title, body });
    this.setState({ buttonIsClicked: false });
  };

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <NavBar triggerButton={this.triggerButton} />

        <Modal
          buttonIsClicked={this.state.buttonIsClicked}
          handleOnHide={this.handleOnHide}
          handleData={this.handleData}
        />

        <br />
        <Router>
          {localStorage.setItem("store", JSON.stringify(this.state))}
          <Route
            path="/"
            exact
            render={() => <Notes handleOnClickDel={this.handleOnClickDel} />}
          />
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addNotes: note => dispatch(addNotes(note))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);