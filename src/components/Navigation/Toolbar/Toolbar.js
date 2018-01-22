import React from 'react';

import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import SidebarToggle from '../Sidebar/SidebarToggle/SidebarToggle';

const toolbar = (props) => (
  <header className={classes.Toolbar}>
    <SidebarToggle clicked={props.sidebarToggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavigationItems isAuthenticated={props.isAuth} />
    </nav>
  </header>
);

export default toolbar;
