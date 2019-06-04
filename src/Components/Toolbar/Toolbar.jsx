import React from 'react';
import './Toolbar.css';
import '../Sidedrawer/DrawerToggle';
import DrawerToggleButton from '../Sidedrawer/DrawerToggle';

const toolbar = props => (
    <header className="Toolbar">
        <nav className="Toolbar-navigation">
            <div className="toolbarbuttontoggle">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="Toolbar-logo"><a href="/">The Logo</a></div>
            <div className="spacer"></div>
            <div className="Toolbar-nav-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Users</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;

