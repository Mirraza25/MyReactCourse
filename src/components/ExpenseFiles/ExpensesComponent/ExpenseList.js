import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import Card from "../../UIFolder/Card";
import Expensesilter from "./Expensesilter";
import { useState } from "react";
function ExpenseList(props) {
  const [enterYear, setEnteredYear] = useState("2019");
  const selectedYear = props.items.filter((element) => {
    return element.date.getFullYear().toString() === enterYear;
  });
  //Using If condition in the content
  let ExpenseContent = <p>No Expenses Listed</p>;
  if (selectedYear.length > 0) {
    ExpenseContent = selectedYear.map((expense) => (
      <ExpenseItem
        // A unique  is always necessary for an array.map function
        // remember that
        key={expense.id}
        title={expense.title}
        dates={expense.date}
        amount={expense.amount}
      />
    ));
  }

  const selectYearListHandler = (givenyear) => {
    console.log("This is in ExpenseList");
    setEnteredYear(givenyear);
  };

  return (
    <div>
      <Card className="expenses">
        <Expensesilter yearFunction={selectYearListHandler} />
        {/**
         * Dynamic
         */}
        {/**
   * Using &&(And) Condition
   * {selectedYear.length===0&&<p>No item shown here</p>}
  {selectedYear.length>0 && selectedYear.map(expense=>
      <ExpenseItem 
      // A unique  is always necessary for an array.map function 
      // remember that
      key={expense.id}
      title={expense.title}
      dates={expense.date}
      amount={expense.amount}/>)}
  
   */}
        {/**
   * Using ternary operator 
   * {selectedYear.length===0?(<p>No item shown here</p>):(selectedYear.map(expense=>
      < ExpenseItem 
      // A unique  is always necessary for an array.map function 
      // remember that
      key={expense.id}
      title={expense.title}
      dates={expense.date}
      amount={expense.amount}/>))}
    
   */}
        {/*
       Static
       */}
        {/*<ExpenseItem title={props.items[0].title} dates={props.items[0].date} amount={props.items[0].amount}/>
    <ExpenseItem title={props.items[1].title} dates={props.items[1].date} amount={props.items[1].amount}/>
    <ExpenseItem title={props.items[2].title} dates={props.items[2].date} amount={props.items[2].amount}/>
    <ExpenseItem title={props.items[3].title} dates={props.items[3].date} amount={props.items[3].amount}/>
    */}
        {ExpenseContent}
      </Card>
    </div>
  );
}

export default ExpenseList;
