import React from 'react'
import './ChooseDay.css'
import { withRouter } from 'react-router-dom'


const ChooseDay = props => {
    return (
        <div className="calendar-day" onClick={() => props.history.push('/studcalendar/' + props.day.toLowerCase())}>
            <h3>{props.day}</h3>
        </div>
    )
}

export default withRouter(ChooseDay)
