import React from 'react'
import {Link} from 'react-router-dom'
import Headline from './hpgComps/hpg-headline'
import HpgClasses from './hpgComps/hpg-classes'

export default function Hpg() {
  return (
    <div>
      <Headline />
      <HpgClasses />
    </div>
  )
}
