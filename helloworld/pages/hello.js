import React from 'react'
export default ({ url: { query: { name } } }) => (
  <p>Hi, { name }</p>
)