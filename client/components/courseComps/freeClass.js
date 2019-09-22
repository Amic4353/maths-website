import React from 'react'
import Chip from '@material-ui/core/Chip'
import CourseModal from './courseModal'

export default class FreeClass extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Wednesday Night - Higher Level',
      description:
        'I am organizing a free prep class for 6th year - higher level. The class will cover Algebra, Logs, and Trigonomentry. You only need to attend one of these classes',
      tableInfo: [
        'Thurs 22 Aug - 12:00 to 15:00',
        'Sat 24 Aug - 12:00 to 15:00',
        'Thurs 29 Aug - 18:00 to 21:00'
      ],
      location: `St Bridge's Resource Center,
      Killester, Dublin 5`
    }
  }

  render() {
    return (
      <div>
        <CourseModal page="Free Prep Class for 6th Years" />

        <div id="ind-container">
          <img id="ind-class-left" src="https://i.imgur.com/83HYM89.jpg" />
          <div id="ind-class-right">
            <h1>Free Preparation Class for 6th Year - Higher Level</h1>

            <div id="ind-class-content">
              <h2>{this.state.title}</h2>
              <p className="ind-class-text">{this.state.description}</p>
              <p className="ind-class-text">
                Class Location: {this.state.location}
              </p>
              <p className="ind-class-text">2019 Dates:</p>
              <div className="ind-class-schedule-chips">
                {this.state.tableInfo.map((elem, indx) => (
                  <Chip className="indChipSchedule" key={indx} label={elem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
