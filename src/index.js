import React from 'react'
import { IconContext } from 'react-icons'
import { getIcon } from './helpers'

const Icon = ({ name, color, size, className, style }) => {
  const Icon = name ? getIcon(name) : null

  return (
    <IconContext.Provider value={{ color, size, className, style }}>
      {name && Icon && <Icon />}
    </IconContext.Provider>
  )
}

export default Icon
