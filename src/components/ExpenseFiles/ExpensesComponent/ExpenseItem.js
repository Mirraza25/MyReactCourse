import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate"
import Card from "../../UIFolder/Card";

function ExpenseItem(props) {
  
  const [title, setTitle] = React.useState(props.title)
  const Title = "Capital Title";
  const Amount = 284;

  const clickHandler = () => {
    setTitle("Updated")
    console.log(title);
  };
  return (
    <Card className="expense-item">
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
