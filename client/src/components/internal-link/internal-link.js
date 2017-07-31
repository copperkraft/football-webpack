import React, { Component } from 'react';
import './internal-link.less';
import PropTypes from 'prop-types';
import {routes} from 'constants/routes';
import {Link} from 'react-router-dom';

export default class InternalLink extends Component {
    render() {
        const {route} = this.props;
        const href = routes[route].replace(/:(\w+)/g, (match, template) => this.props.parameters[template]);
        return (
            <Link className="nav-link" to={href}>
                {this.props.children}
            </Link>
        );
    }
}

InternalLink.propTypes = {
    route: PropTypes.string,
    parameters: PropTypes.object
};