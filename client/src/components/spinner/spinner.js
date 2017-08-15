import React, {Component} from 'react';
import './spinner.less';

export default class Spin extends Component {
    render() {
        return (
            <div className="spinner">
                <div className="spinner__circle spinner__circle--first"></div>
                <div className="spinner__circle spinner__circle--second"></div>
                <div className="spinner__circle"></div>
            </div>
        );
    }
}