import React, { useState } from "react";

import List from "./List";
import Header from "./Header";
import Input from "./Input";

function App() {
  const [todoArr, setTodoArr] = useState([]);

  function deleteItem(id) {
    setTodoArr((prevArr) => {
      return prevArr.filter((todo, index) => {
        return index !== id;
      });
    });
  }
  // const [isCrossOut, setCrossOut] = useState(false);
  return (
    <div className="container">
      <Header />
      <Input setTodoArr={setTodoArr} />
      <div>
        {todoArr.map((item, index) => {
          return (
            <List key={index} id={index} item={item} deleteItem={deleteItem} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
