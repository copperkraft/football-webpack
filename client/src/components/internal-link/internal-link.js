import React, { Component } from 'react';
import './internal-link.less';
import PropTypes from 'prop-types';
import {routes} from 'constants/routes';
import {NavLink} from 'react-router-dom';

export default class InternalLink extends Component {
    render() {
        const {route} = this.props;
        const href = routes[route].replace(/:(\w+)/g, (match, template) => this.props.parameters[template]);
        return (
            <NavLink to={href}>
                {this.props.children}
            </NavLink>
        );
    }
}

InternalLink.propTypes = {
    route: PropTypes.string,
    parameters: PropTypes.object
};