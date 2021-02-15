//OUTER
import React from "react";
import {Component} from "react";
import {NavLink} from "react-router-dom";

//LOCAL
import "./News.css";
import NewsBlock from "./newsComponents/NewsBlock";


class News extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div className="newsBlock__header-navLick">
          <div className="navLink-news__link-block">
            <NavLink exact to='/news'
                     activeClassName="navLink-news__link-active"
                     className="navLink-news__link">
              Новости Школы
            </NavLink>
          </div>
          <div className="navLink-news__link-block">
            <NavLink exact to='/news/creat'
                     activeClassName="navLink-news__link-active"
                     className="navLink-news__link">
              Создать новость
            </NavLink>
          </div>
        </div>
        <div>
          <NewsBlock/>
        </div>
      </div>
    );
  }
}

export default News;
