import React from 'react'
import {Link} from 'react-router-dom'
import Headline from './courseComps/course-headline'
import SignUp from './hpgComps/signup'
import Highlight from './hpgComps/hpg-highlight'
import Message from './courseComps/messageCall'
import CourseBlock from './courseComps/courseBlock'

export default function CourseSchedule() {
  return (
    <div>
      <Headline />
      <CourseBlock />
      <Message />
      <Highlight />
      <SignUp />
    </div>
  )
}
