import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // Part of older method (same as method 3 - see Expenses.js)
  //   let expensesContent = <p>No expenses found.</p>;
  //   if (props.items.length > 0) {
  //     expensesContent = props.items.map((expense) => (
  //       <ExpenseItem
  //         key={expense.id}
  //         title={expense.title}
  //         amount={expense.amount}
  //         date={expense.date}
  //       />
  //     ));
  //   }

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}

      {/* Older method (same as method 3 - see Expenses.js) */}
      {/* {expensesContent} */}
    </ul>
  );
};

export default ExpensesList;
