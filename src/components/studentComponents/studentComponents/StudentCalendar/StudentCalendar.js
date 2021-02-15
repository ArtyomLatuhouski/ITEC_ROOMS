import React, { Component } from 'react'
import ChooseDay from './calendarComponents/ChooseDay/ChooseDay';
import './StudentCalendar.css'

class StudentCalendar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            days: [
                {dayName: 'Sunday'},
                {dayName: 'Monday'},
                {dayName: 'Tuesday'}
            ]
        }        
    }

    componentDidMount() {}

    render() {
        return (
            <div className='stud-calend__wrapper'>
                <div className='stud-calend'>
                    <h2 className='stud-calend__title'>Студенческий календарь</h2>
                    <div className='stud-calend__item-container'>
                    {this.state.days.map((day, index) => {
                        return (
                            <ChooseDay
                            key={index}
                            day={day.dayName}                            
                            />
                        )
                    })}
                    </div>                    
                </div>
            </div>
        )
    }
}

export default StudentCalendar