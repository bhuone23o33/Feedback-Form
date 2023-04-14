import PropType from 'prop-types'
import React from 'react'

function Button({children, version , type , isDisable}) {
  return (
    <button type = {type} disabled = {isDisable} className={`btn btn-${version}`}> 
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type:'button',
    isDiable: false

}

Button.PropType = {
    children: PropType.node.isRequired,
    version: PropType.string,
    type: PropType.string,
    isDiable: PropType.bool 
}


export default Button
