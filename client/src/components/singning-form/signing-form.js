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
            <div className="signing-form">
                <div className="signing-form__title"> {
                    action === actionTypes.signIn
                        ? 'Sign in'
                        : action === actionTypes.signUp
                            ? 'Sign up'
                            : action === actionTypes.edit
                                ? 'Edit profile'
                                : ''
                } </div>

                <input
                    onChange={(event) => this.setState({email: event.target.value})}
                    className="signing-form__input"
                    placeholder="email"
                />

                <input
                    type="password"
                    onChange={(event) => this.setState({password: event.target.value})}
                    className="signing-form__input"
                    placeholder="password"
                />

                <div className="signing-form__text">
                    <button onClick={this.onSubmit} className="signing-form__text">Submit</button>
                    {action === actionTypes.signIn
                        ? 'Don\'t have an account?'
                        : action === actionTypes.signUp
                            ? 'Sign up'
                            : action === actionTypes.edit
                                ? 'Edit profile'
                                : ''
                    }

                    <button onClick={this.props.onChangeAction} className="signing-form__text">
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