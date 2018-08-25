import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Billing from './Billing';

import '../styles/header.css'

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
            <li className="item3 login" key="2">
                <a href="/auth/google">login</a>
            </li>,
            <li className="signin" key="1">
                <a href="/auth/google">sign up</a>
            </li>,
        ];
      default:
        return [
          <li className="credits item1" key="3">
              balance: {this.props.auth.credits} credits
          </li>,
          <li className="item2" key="1"><Billing /></li>,
          <li className="logout item3" key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <div id="navbar">
        <Link
          to={this.props.auth ? '/surveys' : '/' }
          className="left brand-logo"
        >
          sPeachy
        </Link>
        <li className="about">
            about
        </li>
        <li className="pricing">
            pricing
        </li>
        {this.renderContent()}
      </div>
    );
  }
}

function linkToProps({ auth }) {
  return { auth };
}

export default connect(linkToProps)(Header);
