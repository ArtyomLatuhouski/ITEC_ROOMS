import React from 'react'
import './NewsLinks.css'
import NewsItem from "./NewsItem/NewsItem";



const NewsLinks = (props) => {
  const {news,match} = props

  return (
    <div className='teacher__news-container'>
      {news.map(item => <NewsItem key={item.id} match={match} newsId={item.id} name={item.name}/>)}
    </div>
  )
}

export default NewsLinks