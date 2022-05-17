import React from "react";
import ExpenseForm from "./ExpenseFrom";
import "./NewExpense.css";

const NewExpense = (props) => {
  // A pointer to this function is passed to the "ExpenseForm" component
  const saveExpenseFormHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddingNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
    </div>
  );
};

export default NewExpense;
