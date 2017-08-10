import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './singning-form.less';

/*import ValidatedInput from 'components/validated-input/validated-input';*/

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

        this.submit = this.submit.bind(this);
        this.toggleMode = this.toggleMode.bind(this);
    }

    toggleMode() {
        this.setState(() => {
            return {
                email: '',
                name: '',
                password: ''
            };
        });
        this.props.onToggleFormMode();
    }

    submit() {
        this.props.onSubmit(this.state);
    }
    /*ValidatedInput.propTypes = {
    type: PropTypes.string,
    isValid: PropTypes.bool.isRequired,
    className: PropTypes.string,
    classNameInvalid: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
}; 
*/

    render() {
        const {formMode} = this.props;

        return (
            <div className="signing-form">
                <div key="title" className="signing-form__title">
                    {formMode === actionTypes.signIn && 'Sign in'}
                    {formMode === actionTypes.signUp && 'Sign up'}
                </div>

                <input
                    key="email"
                    value={this.state.email}
                    onChange={(event) => this.setState({email: event.target.value})}
                    className="signing-form__input"
                    placeholder="email"/>

                <input
                    key="password"
                    type="password"
                    value={this.state.password}
                    onChange={(event) => this.setState({password: event.target.value})}
                    className="signing-form__input"
                    placeholder="password"/>

                {
                    formMode === actionTypes.signUp &&
                    <input
                        key="name"
                        value={this.state.name}
                        onChange={(event) => this.setState({name: event.target.value})}
                        className="signing-form__input"
                        placeholder="name"/>
                }

                <button
                    key="submit"
                    onClick={this.submit}
                    className="signing-form__button">
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