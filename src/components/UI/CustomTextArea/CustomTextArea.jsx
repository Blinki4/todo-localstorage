import React from 'react';
import classes from './CustomTextArea.module.css'

const CustomTextArea = (props) => {


    return (
        <textarea {...props} className={classes.customTextArea} {...props} maxLength='100'>

        </textarea>
    );
};

export default CustomTextArea;