import React from 'react';

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.item_array[0].title}
        amount={props.item_array[0].amount}
        date={props.item_array[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item_array[1].title}
        amount={props.item_array[1].amount}
        date={props.item_array[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item_array[2].title}
        amount={props.item_array[2].amount}
        date={props.item_array[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.item_array[3].title}
        amount={props.item_array[3].amount}
        date={props.item_array[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
