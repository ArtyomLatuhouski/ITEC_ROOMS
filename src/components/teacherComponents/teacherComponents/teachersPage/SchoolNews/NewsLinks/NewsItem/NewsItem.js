import React from 'react'
import './NewsItem.css'
import {NavLink} from "react-router-dom";


const NewsItem = (props) => {
  const {match, newsId} = props
  return (
    <div className='teacher__news-item-container '>
      <NavLink exact to={`${match.url}/` + newsId} className='teacher__news-link'
               activeClassName='teacher__news-active-link'>{props.name}</NavLink>
    </div>
  )
}

export default NewsItem