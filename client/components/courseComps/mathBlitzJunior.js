import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Chip from '@material-ui/core/Chip'
import CourseModal from './courseModal'

export default class MathBlitzJunior extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Higher Level Maths - Paper 1',
      description:
        'Like no other revision. This Maths Blitz Revision takes each hour and covers an examination topic. Incorporates unique and original potential examination questions',
      tableInfo: [
        '09:45-10:00 - REGISTRATION',
        '10:00-11:00 - ALGEBRA',
        '11:15-12:15 - ARITHMETIC, SURDS AND PERCENTAGES',
        '12:30-13:30 - FUNCTIONS, PATTERNS + GRAPHS',
        '13:30-14:30 - BRING LUNCH + DRINK',
        '14:30-15:30 - SETS + NUMBER THEORY',
        '15:45-16:45 - IN CONTEXT EXAM QUESTIONS'
      ],
      time: 'Saturday 1 June 2020',
      cost:
        '€150 for both days (€90 for one day) Booking deposit of €50 is essential.',
      location: `St Bridge's Resource Center,
        Killester, Dublin 5`
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.target.value === 'paper1') {
      this.setState({
        title: 'Higher Level Maths - Paper 1',
        tableInfo: [
          '09:45-10:00 - REGISTRATION',
          '10:00-11:00 - ALGEBRA',
          '11:15-12:15 - DIFFERENTATION + INTEGRATION',
          '12:30-13:30 - COMPLEX NUMBERS',
          '13:30-14:30 - BRING LUNCH + DRINK',
          '14:30-15:30 - FINANCIAL MATHS + SEQUENCES & SERIES',
          '15:45-16:45 - ALGEBRA 2'
        ],
        time: 'Saturday 1 June 2020'
      })
    } else {
      this.setState({
        title: 'Higher Level Maths - Paper 2',
        tableInfo: [
          'Sept 09:45-10:00 - REGISTRATION',
          '10:00-11:00 - PROBABILITY + STATISTICS',
          '11:15-12:15 - GEOMETRY',
          '12:30-13:30 - LINE + TRIGONOMETRY',
          '13:30-14:30 - BRING LUNCH + DRINK',
          '14:30-15:30 - AREA, NETS & VOLUME',
          '15:45-16:45 - IN CONTEXT EXAM QUESTIONS'
        ],
        time: 'Saturday 8 June 2020'
      })
    }
  }

  render() {
    return (
      <div>
        <CourseModal page={`3rd Year Maths Blitz - ${this.state.title}`} />
        <div id="ind-container">
          <img id="ind-class-left" src="https://i.imgur.com/zRlV7Tt.jpg" />
          <div id="ind-class-right">
            <h1>Junior - Maths Leaving Certs</h1>
            <FormControl component="fieldset">
              <FormLabel className="ind-class-text" component="legend">
                Class Type
              </FormLabel>
              <RadioGroup
                aria-label="position"
                name="position"
                value={this.state.value}
                onChange={this.handleChange}
                row
              >
                <FormControlLabel
                  value="paper1"
                  control={<Radio color="#009388" />}
                  label="Paper 1"
                  labelPlacement="end"
                  className="ind-class-radio"
                />
                <FormControlLabel
                  value="paper2"
                  control={<Radio color="#009388" />}
                  label="Paper 2"
                  labelPlacement="end"
                  className="ind-class-radio"
                />
              </RadioGroup>
            </FormControl>
            <div id="ind-class-content">
              <h2>{this.state.title}</h2>
              <p className="ind-class-text">{this.state.description}</p>
              <p className="ind-class-text">Class Time(s): {this.state.time}</p>
              <p className="ind-class-text">
                Class Location: {this.state.location}
              </p>
              <p className="ind-class-text">Class Price: {this.state.cost}</p>
              <p className="ind-class-text">Material Covered:</p>
              <div id="ind-class-schedule-chips">
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
