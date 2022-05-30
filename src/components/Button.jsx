import React from "react";

function Button({ addItem }) {
  return (
    <button onClick={addItem}>
      <span>Add</span>
    </button>
  );
}

export default Button;
