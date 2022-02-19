import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
const expenseFormData=(expense)=>
{
  const expenseData=
  {
    ...expense,
    id:Math.random().toString()
  }
  props.newExpenseData(expenseData)
}
  return (
    <div className="new-expense">
      <ExpenseForm expenseDataHandler={expenseFormData}/>
    </div>
  );
};

export default NewExpense;
