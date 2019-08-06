import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Col, Row, Container } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { deleteNotes } from "../actions/index";
import { bin } from "react-icons-kit/icomoon/bin";

class Notes extends Component {
  handleOnClickDel = e => {
    console.log(e.currentTarget.dataset.id);
    let id = e.currentTarget.dataset.id;
    this.props.deleteNotes({ id });
  };
  render() {
    const notes = this.props.notes;
    const categories = this.props.categories;
    return (
      <Container>
        <Row>
          {notes.length > 0 ? (
            notes.map((note, id) => (
              <Col key={id} style={{ flexGrow: "0" }}>
                {categories.map((category1, id) => (
                  <div key={id}>
                    {category1.name === note.category ? (
                      <Card
                        className="text-center"
                        style={{
                          margin: "20px",
                          minWidth: "200px",
                          maxWidth: "300px",
                          minHeight: "200px"
                        }}
                      >
                        <Card.Header
                          style={{
                            background: category1.color,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            wordWrap: "break-word"
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
              </Col>
            ))
          ) : (
            <Col>Empty</Col>
          )}
        </Row>
      </Container>
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
