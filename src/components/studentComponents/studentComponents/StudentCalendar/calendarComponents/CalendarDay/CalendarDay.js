import React, { Component } from 'react'
import './CalendarDay.css'

class CalendarDay extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    componentDidMount() {}
  
    render() {

        console.log(this.props);
  
      return (
        <div className="day_wrapper">

            <h2>{this.props.match.params.day}</h2>
          
        </div>
      );
    }
}

export default CalendarDay
