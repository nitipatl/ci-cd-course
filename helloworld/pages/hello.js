import React from 'react'
import _greeting from '../libs/greeting'
export default ({ url: { query: { name } } }) => (
  <p>{ _greeting(name) }</p>
)