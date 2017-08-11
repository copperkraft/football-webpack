import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './select.less';

export default class Select extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.props.onChange(event.target.value);
    }
    render() {
        const {isFavorite, onChange} = this.props;
        return (
            <button onClick={onChange}>{
                isFavorite 
                    ? 'Add to favorites'
                    : 'Remove from favorites'    
            }</button>
        );
    }
}

Select.propTypes = {
    isFavorite: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};