import React from 'react';
import './user-welcome.less';
import PropTypes from 'prop-types';

//TODO: Add a link to profile page, when it is available

export default function UserWelcome(props) {
    const {name} = props;
    return (
        <div className="user-welcome">
            Hello, {name || 'Stranger'}!
            <button
                className="user-welcome__button"
                onClick={props.onSignOut}>
                Sign out
            </button>
        </div>
    );
}

UserWelcome.propTypes = {
    name: PropTypes.string.isRequired,
    onSignOut: PropTypes.func.isRequired
};