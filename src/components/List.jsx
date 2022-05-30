import React from "react";

function List({ item, deleteItem, id }) {
  return (
    <ul>
      <li
        onClick={() => {
          deleteItem(id);
        }}
      >
        {item}
      </li>
    </ul>
  );
}

export default List;
