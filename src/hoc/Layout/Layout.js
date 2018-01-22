import React, { Component } from 'react';
import { connect } from 'react-redux';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Sidebar from '../../components/Navigation/Sidebar/Sidebar';

class Layout extends Component {
  state = {
    showSidebar: false
  }

  sidebarClosedHandler = () => {
    this.setState({showSidebar: false});
  }

  sidebarToggleHandler = () => {
    this.setState((prevState) => {
      return {showSidebar: !prevState.showSidebar};
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar
          isAuth={this.props.isAuthenticated}
          sidebarToggleClicked={this.sidebarToggleHandler} />
        <Sidebar
          isAuth={this.props.isAuthenticated}
          open={this.state.showSidebar}
          closed={this.sidebarClosedHandler}
        />
        <main className={classes.content}>
          {this.props.children}
        </main>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
};

export default connect(mapStateToProps)(Layout);
