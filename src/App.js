import React, { useState } from "react";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const listofItems = () => {
    setItems((newItems) => {
      return [...newItems, inputList];
    });
  };

  return (
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          onChange={(e) => setInputList(e.target.value)}
        />
        <button onClick={listofItems}>+</button>
        <ol>
          {/*<li>{inputList}</li> */}
          {items.map((itemval, indx) => {
            return (
              <ol key="indx">
                <li>{itemval}</li>
              </ol>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
