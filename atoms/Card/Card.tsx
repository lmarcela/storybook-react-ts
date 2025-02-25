import React from "react";
import classNames from "classnames";
import styles from "./Card.module.css";
import { CardProps } from "./types";

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
      className={classNames(
        styles.card,
        styles[`color-${color}`],
        styles[`size-${size}`],
        {
          [styles["is-clickable"]]: isClickable,
          [styles["is-draggable"]]: isDraggable,
        }
      )}
    >
      {children}
    </div>
  );
};

export default Card;