import React from 'react';
import classes from './Layout.module.css';
import Aux from '../Hoc/Auxillary';

const Layout = (props) => {
    return (
        <Aux>
        <div className={classes.Content}>
            <main>
                {props.children}
            </main>
        </div>
        </Aux>
    );
}

export default Layout;