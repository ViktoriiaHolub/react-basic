import React from "react";
import "./../styles/cart.css";

export function MovieCart({ title }) {
  return (
    <div style={{ marginTop: "15px" }}>
      <h3>Movie Title: {title}</h3>
      <p className="description">Description</p>
    </div>
  );
}
