import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'
import Card from '../UIFolder/Card'
function ExpenseList(props) {
  return (
    <Card className="expenses">
    <ExpenseItem title={props.items[0].title} dates={props.items[0].date} amount={props.items[0].amount}/>
    <ExpenseItem title={props.items[1].title} dates={props.items[1].date} amount={props.items[1].amount}/>
    <ExpenseItem title={props.items[2].title} dates={props.items[2].date} amount={props.items[2].amount}/>
    <ExpenseItem title={props.items[3].title} dates={props.items[3].date} amount={props.items[3].amount}/>
</Card>
  )
}

export default ExpenseList