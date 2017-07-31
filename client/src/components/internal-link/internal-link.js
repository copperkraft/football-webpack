import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './internal-link.less';

import {routes} from 'constants/routes';

export default class InternalLink extends Component {
    render() {
        const {
            route,
            parameters,
            className,
            activeClassName
        } = this.props;

        const href = '/' + routes[route].replace(/:(\w+)/g, (match, template) => parameters[template]);

        return (
            <NavLink className={className} activeClassName={activeClassName} to={href}>
                {this.props.children}
            </NavLink>
        );
    }
}

InternalLink.propTypes = {
    route: PropTypes.string,
    parameters: PropTypes.object,
    className: PropTypes.string,
    activeClassName: PropTypes.string
};

InternalLink.defaultProps = {
    className: 'nav-link',
    activeClassName: 'nav-link--active'
};