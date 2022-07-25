// import React, { useState } from "react";
// import { useState } from "react";
import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 1);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 249.67;

  // Moved to ExpenseDate.js
  // const month = props.date.toLocaleString("en-US", { month: "long" });
  // const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  // const year = props.date.getFullYear();

  // Commented the button and clickHandler for the title as it was just for demonstration purposes!
  /*
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle("Updated!");
    // console.log(title);
  };
  */

  return (
    // Card wrapped inside li for symantic purposes w.r.t. ExpenseList.js
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/*<button onClick={clickHandler}>Change Title</button>*/}
      </Card>
    </li>
  );
};

export default ExpenseItem;
