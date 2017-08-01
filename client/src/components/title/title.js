import React from 'react';
import './title.less';
import PropTypes from 'prop-types';

export default function Title(props) {
    const {text} = props;
    return (
        <h1 className="title">{text}</h1>
    );
}

Title.propTypes = {
    text: PropTypes.string
};