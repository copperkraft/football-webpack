import React, {Component} from 'react';
import PropTypes from 'prop-types';
import validator from 'validator';

import './singning-form.less';

import ValidatedInput from 'components/validated-input/validated-input';
import {showErrorAlert} from 'utils/notifications';

export const actionTypes = {
    signIn: 'signIn',
    signUp: 'signUp',
    edit: 'edit'
};

export default class SigningForm extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            name: null,
            password: null
        };

        this.submit = this.submit.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        this.setState(() => {
            return {
                email: null,
                name: null,
                password: null
            };
        });
        this.props.onToggleFormMode();
    }

    isInputsValid() {
        const {email, name, password} = this.state;
        return validator.isEmail(email) &&
            !validator.isEmail(password) &&
            (!validator.isEmpty(name) || this.props.formMode === actionTypes.signIn);
    }

    submit() {
        if (this.isInputsValid()) {
            this.props.onSubmit(this.state);
        } else {
            showErrorAlert();
        }
    }

    render() {
        const {formMode} = this.props;
        const {email, name, password} = this.state;

        return (
            <div className="signing-form">
                <div key="title" className="signing-form__title">
                    {formMode === actionTypes.signIn && 'Sign in'}
                    {formMode === actionTypes.signUp && 'Sign up'}
                </div>

                <ValidatedInput
                    key="email"
                    placeholder="email"
                    value={email}
                    isValid={email === null || validator.isEmail(email)}
                    onChange={(event) => this.setState({email: event.target.value})}
                />

                <ValidatedInput
                    type="password"
                    key="password"
                    placeholder="password"
                    value={password}
                    isValid={password === null || !validator.isEmpty(password)}
                    onChange={(event) => this.setState({password: event.target.value})}
                />

                {
                    formMode === actionTypes.signUp &&
                     <ValidatedInput
                         type="name"
                         key="name"
                         placeholder="name"
                         value={name}
                         isValid={password === null || !validator.isEmpty(name)}
                         onChange={(event) => this.setState({name: event.target.value})}
                     />
                }

                <button
                    key="submit"
                    onClick={this.submit}
                    className="signing-form__button"
                >
                    Submit
                </button>
                {formMode === actionTypes.signIn &&
                    <div className="signing-form__text">
                        Don't have an account?
                        <button
                            className="signing-form__link"
                            onClick={this.toggleMode}>
                            sign up for free
                        </button>
                    </div>
                }
                {formMode === actionTypes.signUp &&
                    <div className="signing-form__text">
                        Already have an account?
                        <button
                            className="signing-form__link"
                            onClick={this.toggleMode}>
                            sign in
                        </button>
                    </div>
                }
            </div>);
    }
}

SigningForm.propTypes = {
    formMode: PropTypes.oneOf([actionTypes.signUp, actionTypes.signIn, actionTypes.edit]),
    onToggleFormMode: PropTypes.func,
    onSubmit: PropTypes.func
};