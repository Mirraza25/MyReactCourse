import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
<<<<<<< HEAD:src/components/ExpenseFiles/ExpensesComponent/ExpenseItem.js
import Card from "../../UIFolder/Card";

function ExpenseItem(props) {
  
  const [title, setTitle] = React.useState(props.title);

=======
import Card from "../UIFolder/Card";

function ExpenseItem(props) {
  /*const Date1=new Date(2022,1,17)
    const Day=Date1.toLocaleString('en-US',{day:'2-digit'})
    const Month=Date1.toLocaleString('en-US',{month:'long'})
    const Year=Date1.getFullYear()*/
  const [title, setTitle] = React.useState(props.title);

  const Title = "Capital Title";
  const Amount = 284;
>>>>>>> 7b8c4160ab08111b10bc1a7eca155ef7460e07e4:src/components/ExpenseFiles/ExpenseItem.js
  const clickHandler = () => {
    setTitle("Updated")
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/*<div>
          
          <div>{Month}</div>
          <div>{Day}</div>
          <div>{Year}</div>
      </div>
      */}
      <ExpenseDate givendate={props.dates} />

      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}$</div>
      <button onClick={clickHandler}>ChangeTitle</button>
    </Card>
  );
}

export default ExpenseItem;
