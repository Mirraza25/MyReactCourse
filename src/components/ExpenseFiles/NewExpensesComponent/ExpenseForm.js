import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const onChangeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
    //console.log(event.target.value);
  };
  const onAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
    //console.log(event.target.value);
  };
  const onDateHandler = (event) => {
    setEnteredDate(event.target.value);
    //console.log(event);
  };
  const onSubmitExpenseData=(event)=>{
   event.preventDefault();
    const expense=
   {
     title:enteredTitle,
     amount:enteredAmount,
     date:new Date(enteredDate)
   };
   console.log(expense)
   props.expenseDataHandler(expense)
   

  }
  return (
    <form onSubmit={onSubmitExpenseData}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={onChangeTitleHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={onAmountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-31-12"
            value={enteredDate}
            onChange={onDateHandler}
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
