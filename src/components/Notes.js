import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  Col,
  Row,
  Container,
  OverlayTrigger,
  Tooltip
} from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { deleteNotes } from "../actions/index";
import { bin } from "react-icons-kit/icomoon/bin";
import { plus } from "react-icons-kit/icomoon/plus";
import { minus } from "react-icons-kit/icomoon/minus";
import SideDrawer from "./SideDrawer/SideDrawer.js";

class Notes extends Component {
  state = {
    sideDrawerOpen: false
  };
  handleOnClickDel = e => {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    this.props.deleteNotes({ id });
  };
  toggleSideDrawer = () => {
    if (this.state.sideDrawerOpen === false)
      this.setState({ sideDrawerOpen: true });
    else this.setState({ sideDrawerOpen: false });
  };
  render() {
    const notes = this.props.notes;
    const categories = this.props.categories;
    return (
      <div
        style={{
          position: "relative"
        }}
      >
        <div>
          <Container>
            <Row
              style={{
                justifyContent: "center"
              }}
            >
              {notes.length > 0 ? (
                notes.map((note, id) => (
                  <div>
                    {categories.map((category1, id) => (
                      <div key={id}>
                        {category1.name === note.category ? (
                          <Card
                            className="text-center"
                            style={{
                              margin: "20px",
                              minWidth: "200px",

                              minHeight: "200px"
                            }}
                          >
                            <Card.Header
                              style={{
                                background: category1.color,
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between"
                              }}
                            >
                              {note.title}

                              <Icon
                                onClick={this.handleOnClickDel.bind(this)}
                                data-id={note.id}
                                style={{ color: "black", cursor: "pointer" }}
                                icon={bin}
                              />
                            </Card.Header>
                            <Card.Body>{note.body}</Card.Body>
                            <Card.Footer>
                              <small className="text-muted">
                                {" "}
                                Category: {category1.name}
                              </small>
                            </Card.Footer>
                          </Card>
                        ) : null}
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div>Empty</div>
              )}

              <SideDrawer open={this.state.sideDrawerOpen} />
            </Row>
          </Container>
        </div>
        <OverlayTrigger
          defaultShow="true"
          placement="left"
          overlay={<Tooltip id={`tooltip-left`}>Tooltip on</Tooltip>}
        >
          <div
            style={{
              position: "fixed",
              bottom: "0",
              width: "100px",
              height: "100px",
              right: "0",
              background: "#fefefe",
              overflow: "hidden",
              opacity: "0.6",
              padding: "20px",
              cursor: "pointer",
              borderRadius: "80px"
            }}
          >
            <Icon
              icon={this.state.sideDrawerOpen ? minus : plus}
              size={"100%"}
              onClick={this.toggleSideDrawer}
            />
          </div>
        </OverlayTrigger>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { notes: state.notes, categories: state.settings.categories };
};
function mapDispatchToProps(dispatch) {
  return {
    deleteNotes: note => dispatch(deleteNotes(note))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notes);
