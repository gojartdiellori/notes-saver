import React from "react";
import "../../styles/sidedrawer.css";
import { Icon } from "react-icons-kit";
import { stickyNote } from "react-icons-kit/fa/stickyNote";
import { notesClick } from "../../actions";
import { connect } from "react-redux";

const sideDrawer = props => {
  let drawerClasses = "side-drawer";

  if (props.open) {
    drawerClasses = "side-drawer open";
  }
  return (
    <nav
      className={drawerClasses}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div onClick={() => props.notesClick({ boolean: true })}>
        <Icon
          data-id="stickyNote"
          size={64}
          icon={stickyNote}
          style={{ color: "red", cursor: "pointer" }}
        />
      </div>
      <Icon size={64} icon={stickyNote} style={{ color: "red" }} />
      <Icon size={64} icon={stickyNote} style={{ color: "red" }} />
      <Icon size={64} icon={stickyNote} style={{ color: "red" }} />
    </nav>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    notesClick: boolean => dispatch(notesClick(boolean))
  };
}
export default connect(
  null,
  mapDispatchToProps
)(sideDrawer);
