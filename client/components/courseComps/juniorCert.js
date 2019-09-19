import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Chip from '@material-ui/core/Chip'

export default class ThirdYear extends React.Component {
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
        'Dec 18',
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
      time: '17:00 - 18:15',
      cost: '30 euro per class'
    }
  }

  render() {
    return (
      <div id="ind-container">
        <img id="ind-class-left" src="https://i.imgur.com/83HYM89.jpg" />
        <div id="ind-class-right">
          <h1>3rd Year - Maths Junior Cert</h1>

          <div id="ind-class-content">
            <h2>{this.state.title}</h2>
            <p className="ind-class-text">{this.state.description}</p>
            <p className="ind-class-text">Class Time(s): {this.state.time}</p>
            <p className="ind-class-text">Class Price: {this.state.cost}</p>
            <p className="ind-class-text">Dates:</p>
            <div id="ind-class-date-chips">
              {this.state.tableInfo.map((elem, indx) => (
                <Chip className="indChip" key={indx} label={elem} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
