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
        const {formMode, onToggleFormMode} = this.props;

        if (formMode === actionTypes.signIn) {
            return (
                <div className="signing-form">
                    <div key="title" className="signing-form__title">Sign in</div>

                    <input
                        key="email"
                        onChange={(event) => this.setState({email: event.target.value})}
                        className="signing-form__input"
                        placeholder="email"/>

                    <input
                        key="password"
                        type="password"
                        onChange={(event) => this.setState({password: event.target.value})}
                        className="signing-form__input"
                        placeholder="password"/>

                    <button
                        key="submit"
                        onClick={this.onSubmit}
                        className="signing-form__button">
                        Submit
                    </button>

                    <div className="signing-form__text">
                        Don't have an account?
                        <button className="signing-form__link" onClick={onToggleFormMode}>
                            sign up for free
                        </button>
                    </div>
                </div>);
        }
        if (formMode === actionTypes.signUp) {
            return (
                <div className="signing-form">
                    <div key="title" className="signing-form__title">Sign up</div>

                    <input
                        key="email"
                        onChange={(event) => this.setState({email: event.target.value})}
                        className="signing-form__input"
                        placeholder="email"/>

                    <input
                        key="password"
                        type="password"
                        onChange={(event) => this.setState({password: event.target.value})}
                        className="signing-form__input"
                        placeholder="password"/>

                    <input
                        key="name"
                        onChange={(event) => this.setState({name: event.target.value})}
                        className="signing-form__input"
                        placeholder="name"/>

                    <button
                        key="submit"
                        onClick={this.onSubmit}
                        className="signing-form__button">
                        Submit
                    </button>

                    <div className="signing-form__text">
                        Already have an account?
                        <button className="signing-form__link" onClick={onToggleFormMode}>
                            sign in
                        </button>
                    </div>
                </div>);
        }

    }
}

SigningForm.propTypes = {
    formMode: PropTypes.oneOf([actionTypes.signUp, actionTypes.signIn, actionTypes.edit]),
    onToggleFormMode: PropTypes.func,
    onSubmit: PropTypes.func
};