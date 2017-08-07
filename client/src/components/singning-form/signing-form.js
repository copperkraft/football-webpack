import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './singning-form.less';

export const actionTypes = {
    signIn: 'signIn',
    signUp: 'signUp',
    edit: 'edit'
};

export default class SigningForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            name: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.onSubmit(this.state);
    }

    render() {
        const {action} = this.props;

        return (
            <div className="card">
                <div className="card__title"> {
                    action === actionTypes.signIn
                        ? 'Sign in'
                        : action === actionTypes.signUp
                            ? 'Sign up'
                            : action === actionTypes.edit
                                ? 'Edit profile'
                                : ''
                } </div>

                <div className="card__text">email</div>
                <input onChange={(event) => this.setState({email: event.target.value})} className="card__text"/>

                <div className="card__text">password</div>
                <input onChange={(event) => this.setState({password: event.target.value})} className="card__text"/>

                <div className="card__text">
                    <button onClick={this.onSubmit} className="card__text">Submit</button>
                    Don't have an account?
                    <button onClick={this.props.onChangeAction} className="card__text">
                        Sign up
                    </button>
                </div>
            </div>);
    }
}

SigningForm.propTypes = {
    action: PropTypes.oneOf([actionTypes.signUp, actionTypes.signIn, actionTypes.edit]),
    onChangeAction: PropTypes.func,
    onSubmit: PropTypes.func
};