import React, { PureComponent } from 'react';
import classes from './Section.css'

class Section extends PureComponent {

    constructor(props) {
        super(props);
        console.log('yes inside section');
    }

    render () {
        return (
            <div className={classes.section}>
                <h2>This is a new header</h2>
            </div>
        )
    }
}

export default Section;