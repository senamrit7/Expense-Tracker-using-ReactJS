import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

// Moved out of the "App" component function
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);


  const newExpenseHandler = (newExpense) => {
    // console.log(newExpense);

    // Method 1 - Not a recomended way of updating the array, but it works!
    // setExpenses([newExpense, ...expenses]);

    // Method 2 - Recomended way of updating the array
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddingNewExpense={newExpenseHandler} />
      <Expenses item_array={expenses} />
    </div>
  );

  // The dummy h2 tag is removed here!
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses item_array={expenses} />
  //   </div>
  // );

  // Implementation using React.createElement() method - actual working of React.JS.
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { item_array: expenses })
  // );
};

export default App;
