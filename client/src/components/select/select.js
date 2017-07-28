import React, { Component } from 'react';
import './select.less';
import PropTypes from 'prop-types';

export default class Select extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        return (
            <select className="select" onChange={this.handleChange} defaultValue={this.props.initial}>
                {this.props.values.map(value =>
                    <option key={value}>{value}</option>
                )}
            </select>
        );
    }
}

Select.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    initial: PropTypes.string
};