//Extracting expense file in different files
import React from 'react'
import ExpenseItem from './ExpenseItem'
import './OriginalList.css'
const OriginalList = (props) => {
    let ExpenseContent=<h2>No item found</h2>
    if(props.selectedYear.length===0)
    {
        return <div className='expenses-list__fallback'>
            {ExpenseContent}
        </div>
    }
  return (
    <ul className='expenses-list'>
        {ExpenseContent = props.selectedYear.map((expense) => (
        <ExpenseItem
          // A unique  is always necessary for an array.map function
          // remember that
          key={expense.id}
          title={expense.title}
          dates={expense.date}
          amount={expense.amount}
        />
      ))}
      </ul>
  )
}

export default OriginalList