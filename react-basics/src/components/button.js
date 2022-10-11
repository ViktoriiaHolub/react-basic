import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myButton: {
    color: "green",
    margin: {
      top: 5, // by default makes to px
      right: 0,
      left: "1rem",
    },
    "& span": {
      // applies for span inside tag with class myButton
      fontWeight: "bold", // writing in camelCase
    },
  },
  myLabel: {
    fontStyle: "italic",
  },
});

export const Button = ({ name }) => {
  const classes = useStyles();

  return (
    <button className={classes.myButton}>
      <span className={classes.myLabel}>{name}</span>
    </button>
  );
};
