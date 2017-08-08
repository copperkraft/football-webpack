import React from 'react';
import './signing-controls.less';
import PropTypes from 'prop-types';

export default function SigningControls(props) {
    const {onSignIn, onSignUp} = props;
    return (
        <div className="signing-controls">
            <button
                className="signing-controls__button"
                onClick={onSignIn}>
                Sign in
            </button>
            or
            <button
                className="signing-controls__button"
                onClick={onSignUp}>
                Sign up
            </button>
        </div>
    );
}

SigningControls.propTypes = {
    onSignIn: PropTypes.func.isRequired,
    onSignUp: PropTypes.func.isRequired
};