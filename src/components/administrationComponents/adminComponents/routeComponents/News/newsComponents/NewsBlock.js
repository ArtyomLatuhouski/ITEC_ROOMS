//INNER
import React from "react";
import { Component } from "react";
import {connect} from "react-redux";

//LOCAL
import "./NewsBlock.css";


class NewsBlockComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div >

      </div>
    );
  }
}

const mapStateToProps=(state)=>{
  return{
    news:state.userData.news
  }
}

const NewsBlock=connect(mapStateToProps,null)(NewsBlockComponent)

export default NewsBlock;
