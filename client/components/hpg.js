import React from 'react'
import {Link} from 'react-router-dom'
import Headline from './hpgComps/hpg-headline'
import HpgClasses from './hpgComps/hpg-classes'
import CourseBlock from './courseComps/courseBlock'
import Highlight from './hpgComps/hpg-highlight'
import About from './hpgComps/hpg-about'
import SignUp from './hpgComps/signup'

export default function Hpg() {
  return (
    <div>
      <Headline />
      <CourseBlock />
      <Highlight />
      <About />
      <SignUp />
    </div>
  )
}
