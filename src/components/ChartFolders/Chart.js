import React from 'react'
import './Chart.css'
import Chartbar from './Chartbar'
const Chart = props => {
    const Amountarray=props.dataPoints.map(dataPoint=>dataPoint.value)// This creates an array
    //...spread operator takes out elements from arrays   
    const MaxAmount=Math.max(...Amountarray)
    return (

    <div className='chart'>Chart
    {props.dataPoints.map(
        dataPoint=><Chartbar
        key={dataPoint.label} 
        value={dataPoint.value} 
        maxValue={MaxAmount} 
        label={dataPoint.label}/>)}
    </div>
    
  )
}

export default Chart