import React from 'react';
import classes from './Toolbar.module.css';

const Toolbar = (props) => {

    return (
        <div className={classes.Toolbar}>
            <h1 className={classes.Heading}>Users</h1>
        </div>
    )
};

export default Toolbar;