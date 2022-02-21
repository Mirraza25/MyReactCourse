import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//

const NewExpense = (props) => {
const Show=<button type="button">ShowExpense</button>
const [allowForm,setAllowForm]=useState(false)  
const expenseFormData=(expense)=>
{
  const expenseData=
  {
    ...expense,
    id:Math.random().toString()
  }
  props.newExpenseData(expenseData)
}
const ExpenseFormVisible=()=>
{
    setAllowForm(true)
}
const ExpenseFormInvisVisible=()=>
{
    setAllowForm(false)
}
let ButtonShow=<button type="button" onClick={ExpenseFormVisible}>Show Form</button>

      if (!allowForm)
      {
        return <div className="new-expense">
                {ButtonShow}
              </div>
      }
      else
      {
        return <div className="new-expense">
        {ButtonShow= <ExpenseForm expenseDataHandler={expenseFormData} cancelValue={ExpenseFormInvisVisible}/>}
      </div>
        }
    }

export default NewExpense;
