import React from 'react'
import styleable from 'react-styleable'

import css from './filter-controls.css'

const { bool, func } = React.PropTypes

function FilterControls(props) {
  const keepClassName = props.isMarkedKeep ? props.css.keepActive : props.css.keep
  const destroyClassName = props.isMarkedDestroy ? props.css.destroyActive : props.css.destroy
  return (
    <div className={props.css.root}>
      <button className={props.css.prev} onClick={props.onPrev}>◀</button>
      <button className={keepClassName} onClick={props.onKeep}>▲</button>
      <button className={destroyClassName} onClick={props.onDestroy}>▼</button>
      <button className={props.css.next} onClick={props.onNext}>▶</button>
    </div>
  )
}

FilterControls.propTypes = {
  isMarkedKeep: bool,
  isMarkedDestroy: bool,
  onPrev: func.isRequired,
  onKeep: func.isRequired,
  onDestroy: func.isRequired,
  onNext: func.isRequired
}

export default styleable(css)(FilterControls)
