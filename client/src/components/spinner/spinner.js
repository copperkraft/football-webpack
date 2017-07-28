import React, { Component } from 'react';
import Spinner from 'spin';
import './spinner.less';

export default class Spin extends Component {
    componentDidMount() {
        this.spinner = new Spinner();
        this.spinner.spin(this.refs.container);
    }
    componentWillUnmount() {
        this.spinner.stop();
    }
    render() {
        return <div className="spinner" ref="container"/>;
    }
}