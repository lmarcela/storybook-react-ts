import React from "react";
import styles from "./Card.module.css";
import { CardProps } from "./types";
import withStyles from "../../hocs/withStyles";

const Card = ({
  getStyles,
  onClick,
  isClickable,
  isDraggable,
  children,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={getStyles("card", ["color", "size"], {
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

export default withStyles(styles)(Card);