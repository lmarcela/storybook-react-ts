import React from "react";
import classNames from "classnames";
import "./Card.css";

export const Card = ({
  onClick,
  isClickable,
  isDraggable,
  children,
  color = 'base',
  size = 'sm',
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-draggable": isDraggable,
      })}
    >
      {children}
    </div>
  );
};

export default Card;