import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [titleEntered, setTitleEntered] = useState("");
  const [amountEntered, setAmountEntered] = useState("");
  const [dateEntered, setDateEntered] = useState("");

  // Alternative syntax for method 1 & 2 - Also visible inside changeHandler functions
  // const [userInput, setUserInput] = useState({
  //   titleEntered: "",
  //   amountEntered: "",
  //   dateEntered: "",
  // });

  const titleChangeHandler = (event) => {
    // console.log(event.target.value);
    setTitleEntered(event.target.value);

    // Alternative method 1 - followed in the other ChangeHandler functions as well
    // Depending on previous state snapshot - not a good practice though - might fail in some cases as react
    // schedules updates, and this method might lead to older values to be fetched without updates!
    // "..." is the spread operator - pulls/fetches all the properties of the object and then adds the new property i.e., can be overwritten
    // setUserInput({
    //   ...userInput,
    //   titleEntered: event.target.value,
    // });

    // Alternative method 2 - followed in the other ChangeHandler functions as well
    // Passing an anonymous arrow (or other) function to setUserInput
    // A better practice - Latest state snapshot is guaranteed
    // setUserInput((prevState) => {
    //   return { ...prevState, titleEntered: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setAmountEntered(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   amountEntered: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, amountEntered: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    setDateEntered(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   dateEntered: event.target.value,
    // });

    // setUserInput((prevState) => {
    //   return { ...prevState, dateEntered: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleEntered,
      amount: amountEntered,
      date: new Date(dateEntered),
    };

    // console.log(expenseData);

    // For Two Way Data Binding - the "value" attribute is used for this purpose!
    setTitleEntered("");
    setAmountEntered("");
    setDateEntered("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={titleEntered}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEntered}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="1950-01-01"
            max="2050-12-31"
            value={dateEntered}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
