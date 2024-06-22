import React from 'react';
import classes from './ErrorPopup.module.css'

const ErrorPopup = ({visible, setVisible, children, error, ...props}) => {

    const rootClasses = [classes.errorPopup]

    if (visible) {
        rootClasses.push(classes.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.errorPopupContent}>
                {error}
            </div>
        </div>
    );
};

export default ErrorPopup;