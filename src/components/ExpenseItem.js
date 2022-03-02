import "./ExpenseItem.css";
function ExpenseItem(props) {
  //const expenseDate = new Date(2022, 2, 1);
  //const expenseTitle = "Car Insurance";
  //const expenseAmount = 249.67;

  return (
    <div class="expense-item">
      <div>{props.date.toISOString()}</div>
      <div class="expense-item__description">
        <h2>{props.title}</h2>
        <div class="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
