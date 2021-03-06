import { Link } from 'react-router'
import React from 'react'
import styleable from 'react-styleable'

import css from './back-button.css'

const { string } = React.PropTypes

function BackButton(props) {
  return (
    <Link to={props.to} className={props.css.root}>➡</Link>
  )
}

BackButton.propTypes = {
  to: string.isRequired
}

export default styleable(css)(BackButton)
