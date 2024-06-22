import React from 'react';
import classes from './CustomBtn.module.css';

export default function CustomBtn({ children, ...props }) {
  return (
    <button className={classes.customBtn} {...props}>
      {children}
    </button>
  );
}
