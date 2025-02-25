import React from 'react'
import { getClasses } from './styles'

export const getTemplate = (Component, styles) => (args) => {
  const allProps = { ...Component.defaultProps, ...args }
  return <Component {...args} getStyles={getClasses(styles)(allProps)} />
}