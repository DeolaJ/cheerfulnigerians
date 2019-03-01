import React from 'react';
import classes from './Section.css'

const Section = (props) => {
    return (
            <div className={classes.section}>
                {props.children}
            </div>
        )
}

export default Section;