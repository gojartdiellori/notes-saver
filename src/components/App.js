import React, { Component } from "react";
import NavBar from "./NavBar";
import Modal from "./Modali";
import { connect } from "react-redux";
import Notes from "./Notes";
import uuidv1 from "uuid";
import Settings from "./Settings";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { addNotes } from "../actions/index";

class App extends Component {
  state = {
    buttonIsClicked: false,
    notes: []
  };

  componentWillMount() {}
  triggerButton = e => {
    e.preventDefault();
    this.setState({ buttonIsClicked: true });
  };
  handleOnHide = () => {
    this.setState({ buttonIsClicked: false });
  };
  handleData = (title, body, bg) => {
    const id = uuidv1();
    this.props.addNotes({ id, title, body, bg });
    this.setState({ buttonIsClicked: false });
  };

  render() {
    return (
      <div style={{ overflowX: "hidden" }}>
        <Router>
          <NavBar triggerButton={this.triggerButton} />

          <Modal
            buttonIsClicked={this.state.buttonIsClicked}
            handleOnHide={this.handleOnHide}
            handleData={this.handleData}
          />

          <br />
          {localStorage.setItem("store", JSON.stringify(this.state))}

          <Route
            path="/"
            exact
            render={() => <Notes handleOnClickDel={this.handleOnClickDel} />}
          />
          <Route path="/settings" exact component={Settings} />
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
