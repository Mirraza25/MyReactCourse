import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {

  const Date1=props.givendate
    const Day=Date1.toLocaleString('en-US',{day:'2-digit'})
    const Month=Date1.toLocaleString('en-US',{month:'long'})
    const Year=Date1.getFullYear()
  return (
    <div className='expense-date'>
        <div className='expense-date__Month'>{Month}</div>
        <div className='expense-date__day'>{Day}</div>
        <div className='expense-date__year'>{Year}</div>
    </div>

    
  )
}

export default ExpenseDate