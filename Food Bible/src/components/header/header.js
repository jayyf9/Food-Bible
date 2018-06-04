import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Icon from '@material-ui/core/Icon';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>The Food Bible</h2>
                <Link to={`/`}>
                  <img className="logo" src={require('../../images/logo.jpg')}  /><br />
                </Link>
            </div>
        )
    }
}

export default Header; 