import React from 'react'
import _greeting from '../libs/greeting'
import _greeting2 from '../libs/greeting.dup'
export default ({ url: { query: { name } } }) => (
  <p>{ _greeting(name) }</p>
)