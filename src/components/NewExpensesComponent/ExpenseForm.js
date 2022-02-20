import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const onChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(event.target.value);
  };
  const onAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log(event.target.value);
  };
  const onDateHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(event);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={onChangeTitleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={onDateHandler}min="2022-01-01" max="2024-31-12" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
