import React from 'react'
import './Cards.css'
function Card(props) {

   const MyStyle='cards '+props.className 
  return (
    <div className={MyStyle}>{props.children}</div>
  )
}

export default Card