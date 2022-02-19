import React,{useState} from 'react'
import './ExpenseFilter.css';
const Expensesilter = (props) => {
    // const[enterYear,setEnterYear]=useState(
    //     {
    //         year1:"",
    //         year2:"",
    //         year3:'',
    //         year4:'',
            
    //     })
    const filterChangeHandler=(event)=>
    {
        props.yearFunction(event.target.value)
    }

  return (
    <div className='expenses-filter'>

      <div className='expenses-filter__control'>
        <label className="expenses-filter label"> Filter by year</label>
        <select   value={props.selectedYear} onChange={filterChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  )
}

export default Expensesilter