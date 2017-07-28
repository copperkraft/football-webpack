import React, { Component } from 'react';
import './select-tabs.less';
import PropTypes from 'prop-types';

export default class SelectTabs extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.props.onChange(value);
    }
    render() {
        return (
            <div className="select-tabs" onChange={this.handleChange} defaultValue={this.props.initial}>
                {this.props.values.map(value =>
                    <div
                        onClick={() => this.handleChange(value)}
                        className={'select-tabs__tab ' + (value === this.props.initial ? 'select-tabs__tab--selected' : '')}
                        key={value}
                    >
                        {value}
                    </div>
                )}
            </div>
        );
    }
}

SelectTabs.propTypes = {
    values: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func.isRequired,
    initial: PropTypes.string
};