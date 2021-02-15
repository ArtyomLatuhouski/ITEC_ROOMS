import React from 'react'
import './SchoolNews.css'
import NewsLinks from "./NewsLinks/NewsLinks";
import {withRouter} from "react-router";
import {Route, Switch} from "react-router";
import NewsContent from "./NewsContent/NewsContent";

const news = [
  {
    id: 1,
    name: 'Show'
  },
  {
    id: 2,
    name: 'Me'
  },
  {
    id: 3,
    name: 'Da way'
  },
]

const SchoolNews = (props) => {
  const {match, location} = props
  if (location.pathname === '/school_news') {
    return (
      <div className='teacher__schoolNews-container'>
        <div className='teacher__news-list'>
          <NewsLinks news={news} match={match}/>
        </div>
        <Switch>
          {news.map(item => <Route key={item.id} path={`${match.url}/` + item.id}
                                   render={() => <NewsContent name={item.name}/>}/>)}
        </Switch>
      </div>
    )
  } else {
    return (
      <div className='teacher__schoolNews-container'>
        <div className='teacher__news-list'>
          <NewsLinks news={news} match={match}/>
        </div>
        <div className='teacher__news-content'>
          <Switch>
            {news.map(item => <Route key={item.id} path={`${match.url}/` + item.id}
                                     render={() => <NewsContent name={item.name}/>}/>)}
          </Switch>

        </div>
      </div>
    )
  }

}

export default withRouter(SchoolNews)