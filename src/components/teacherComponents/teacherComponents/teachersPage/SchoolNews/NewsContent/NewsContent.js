import React from 'react'
import './NewsContent.css'


const NewsContent = (props) => {
  const {name} = props

  return (
    <div>
      <p>{name}</p>
    </div>
  )
}

export default NewsContent