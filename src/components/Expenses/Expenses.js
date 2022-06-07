import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2019");

  const expensesFilterHandler = (yearSelected) => {
    console.log(yearSelected);
    setSelectedFilterYear(yearSelected);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultSelectedYear={selectedFilterYear}
        onChangeExpensesFilter={expensesFilterHandler}
      />
      {props.item_array.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {/* <ExpenseItem
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
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
