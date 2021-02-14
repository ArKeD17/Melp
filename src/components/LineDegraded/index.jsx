import React from "react";
import styles from "./index.module.scss";

function LineDegraded({ black }) {
  return (
    <div
      className={!black ? styles.container_line : styles.container_line_black}
    >
      <div className={!black ? styles.line_left : styles.line_left_black}></div>
      <div
        className={!black ? styles.line_right : styles.line_right_black}
      ></div>
    </div>
  );
}

export default LineDegraded;
