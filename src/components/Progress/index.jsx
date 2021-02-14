import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1100,
    width: "100%",
  },
});

function Progress({ visible }) {
  const classes = useStyles();
  return (
    <div
      style={{ display: visible ? "block" : "none" }}
      className={classes.root}
    >
      <LinearProgress color="primary" />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    visible: state.General.progress,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
