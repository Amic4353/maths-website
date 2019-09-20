import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Chip from '@material-ui/core/Chip'
import CourseModal from './courseModal'

export default class FifthYear extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'Wednesday Night - Higher Level',
      description:
        'Based in Killester I provide intensive maths tuition at Higher levels in North Dublin. Classes are small, offering an unique learning experience leading to better unstanding of maths and better results. George teaches his students to understand maths rather than learning tricks.',
      tableInfo: [
        'Sept 18',
        'Sept 25',
        'Oct 2',
        'Oct 9',
        'Oct 16',
        'Oct 23',
        'Oct 30',
        'Nov 6',
        'Nov 13',
        'Nov 20',
        'Nov 27',
        'Dec 4',
        'Dec 11',
        'Dec 18'
      ],
      nextyear: [
        'Jan 8',
        'Jan 15',
        'Jan 22',
        'Jan 29',
        'Feb 5',
        'Feb 12',
        'Feb 19',
        'Feb 26',
        'Mar 4',
        'Mar 11',
        'Mar 18',
        'Mar 25',
        'April 1',
        'April 8',
        'April 15',
        'April 22',
        'April 29',
        'May 6',
        'May 13',
        'May 20',
        'May 27'
      ],
      time: '18:30 - 19:50',
      cost: '30 euro per class'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    if (event.target.value === 'wednesday') {
      this.setState({
        title: 'Wednesday Night - Higher Level',
        tableInfo: [
          'Sept 18',
          'Sept 25',
          'Oct 2',
          'Oct 9',
          'Oct 16',
          'Oct 23',
          'Oct 30',
          'Nov 6',
          'Nov 13',
          'Nov 20',
          'Nov 27',
          'Dec 4',
          'Dec 11',
          'Dec 18'
        ],
        nextyear: [
          'Jan 8',
          'Jan 15',
          'Jan 22',
          'Jan 29',
          'Feb 5',
          'Feb 12',
          'Feb 19',
          'Feb 26',
          'Mar 4',
          'Mar 11',
          'Mar 18',
          'Mar 25',
          'April 1',
          'April 8',
          'April 15',
          'April 22',
          'April 29',
          'May 6',
          'May 13',
          'May 20',
          'May 27'
        ],
        time: '18:30 - 19:50'
      })
    } else {
      this.setState({
        title: 'Thursday Night - Higher Level',
        tableInfo: [
          'Sept 19',
          'Sept 26',
          'Oct 3',
          'Oct 10',
          'Oct 17',
          'Oct 24',
          'Oct 31',
          'Nov 7',
          'Nov 14',
          'Nov 21',
          'Nov 28',
          'Dec 5',
          'Dec 12',
          'Dec 19'
        ],
        nextyear: [
          'Jan 9',
          'Jan 16',
          'Jan 23',
          'Jan 30',
          'Feb 6',
          'Feb 13',
          'Feb 20',
          'Feb 27',
          'Mar 5',
          'Mar 12',
          'Mar 19',
          'Mar 26',
          'April 2',
          'April 9',
          'April 16',
          'April 23',
          'April 30',
          'May 7',
          'May 14',
          'May 21',
          'May 28'
        ],
        time: '17:00 - 18:20'
      })
    }
  }

  render() {
    return (
      <div>
        <CourseModal page="5th Year Maths Grinds" />
        <div id="ind-container">
          <img id="ind-class-left" src="https://i.imgur.com/qKKYUb8.jpg" />
          <div id="ind-class-right">
            <h1>5th Year - Maths Leaving Certs</h1>
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
                  value="wednesday"
                  control={<Radio color="#009388" />}
                  label="Wednesday Night - Higher Level"
                  labelPlacement="end"
                  className="ind-class-radio"
                />
                <FormControlLabel
                  value="thursday"
                  control={<Radio color="#009388" />}
                  label="Thursday Night - Higher Level"
                  labelPlacement="end"
                  className="ind-class-radio"
                />
              </RadioGroup>
            </FormControl>
            <div id="ind-class-content">
              <h2>{this.state.title}</h2>
              <p className="ind-class-text">{this.state.description}</p>
              <p className="ind-class-text">Class Time(s): {this.state.time}</p>
              <p className="ind-class-text">Class Price: {this.state.cost}</p>
              <p className="ind-class-text">2019 Dates:</p>
              <div className="ind-class-date-chips">
                {this.state.tableInfo.map((elem, indx) => (
                  <Chip className="indChip" key={indx} label={elem} />
                ))}
              </div>
              <p className="ind-class-text">2020 Dates:</p>
              <div className="ind-class-date-chips">
                {this.state.nextyear.map((elem, indx) => (
                  <Chip className="indChip" key={indx} label={elem} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
