import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './validated-input.less';

export default class ValidatedInput extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        const {type, isValid, className, classNameInvalid, onChange, errorMessage} = this.props;
        return (

            <input 
                type={type}
                onChange={onChange}
                className={className + ' ' + (!isValid ? classNameInvalid : '')}
            />
            
        );
    }
}

ValidatedInput.defaultProps = {
    type: 'text',
    className: 'validated-input',
    classNameInvalid: 'validated-input--invalid'
};

ValidatedInput.propTypes = {
    type: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    className: PropTypes.string,
    classNameInvalid: PropTypes.string,
    onChange: PropTypes.func.isRequired
};