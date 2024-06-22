import React from 'react'
import classes from './CustomInput.module.css'

export default function CutomInput(props) {
  return <input className={classes.customInput} {...props} />
}
