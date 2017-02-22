import React, { createElement } from 'react'
import * as Icons from 'glob:svgs/**/*.svg'

export default ({ name, ...restProps }) => (
  createElement(Icons[name], restProps)
)
