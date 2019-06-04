import React from 'react';
import './sidedrawer.css';

const SideDrawer = props => { 
    let drawerClasses=['sidedrawer'];
    if (props.show) {
        drawerClasses = ['sidedrawer open']
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Products</a></li>
            <li><a href="/">Users</a></li>
        </ul>
    </nav>
)
};

export default SideDrawer;