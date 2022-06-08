import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedFilterYear, setSelectedFilterYear] = useState("2019");

  const expensesFilterHandler = (yearSelected) => {
    // console.log(yearSelected);
    setSelectedFilterYear(yearSelected);
  };

  const filteredYearExpenses = props.item_array.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedFilterYear;
  });

  // Part of Method 3 - Rendering conditional content
  let expensesContent = <p>No expenses found.</p>;
  if(filteredYearExpenses.length > 0){
    expensesContent = filteredYearExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultSelectedYear={selectedFilterYear}
        onChangeExpensesFilter={expensesFilterHandler}
      />

      {/* Method 3 - Rendering conditional content */}
      {expensesContent}

      {/* Method 2 - Rendering conditional content - expression after "&&" is executed if 1st statement is true */}
      {/* {filteredYearExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredYearExpenses.length > 0 &&
        filteredYearExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */}

      {/* Method 1 - Rendering conditional content */}
      {/* {filteredYearExpenses.length === 0 ? (
        <p>No expenses found.</p>
      ) : (
        filteredYearExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}

      {/* Commented the display of the entire expense array */}
      {/* {props.item_array.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))} */}

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
