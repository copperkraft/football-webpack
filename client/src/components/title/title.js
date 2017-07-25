import React, { Component } from 'react';
import './title.less';
import PropTypes from 'prop-types';

export default class Title extends Component {
    render() {
        const {text} = this.props;
        return (
            <h1 className="title">{text}</h1>
        );
    }
}

Title.propTypes = {
    text: PropTypes.string
};