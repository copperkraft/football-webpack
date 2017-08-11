import React, {Component} from 'react';
import Spinner from 'spin';
import './spinner.less';

export default class Spin extends Component {
    render() {
        return <div className="spinner" ref={container => {
            new Spinner().spin(container);
        }}/>;
    }
}