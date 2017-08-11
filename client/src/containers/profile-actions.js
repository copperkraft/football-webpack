import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    fetchUser, logInUser, logOutUser,
    registerUser
} from '../actions/user-actions';
import SigningForm, {actionTypes} from 'components/singning-form/signing-form';
import Modal from 'react-modal';
import UserWelcome from 'components/user-welcome/user-welcome';
import SigningControls from 'components/signing-controls/signing-controls';
import {modalStyles} from 'constants/modal-styles';

class ProfileActions extends Component {
    constructor() {
        super();

        this.state = {formMode: actionTypes.signIn, isFormOpened: false};

        this.submitHandler = this.submitHandler.bind(this);
        this.toggleActionType = this.toggleActionType.bind(this);
        this.signOutHandler = this.signOutHandler.bind(this);
        this.openSignUp = this.openSignUp.bind(this);
        this.openSignIn = this.openSignIn.bind(this);
        this.closeForm = this.closeForm.bind(this);
    }

    componentWillMount() {
        const {dispatch} = this.props;

        dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.signed) {
            this.setState({isFormOpened: false});
        }
    }

    submitHandler(info) {
        const {dispatch} = this.props;

        if (this.state.formMode === actionTypes.signIn) {
            dispatch(logInUser(info));
        } else if (this.state.formMode === actionTypes.signUp) {
            dispatch(registerUser(info));
        }

        this.closeForm();
    }

    signOutHandler() {
        const {dispatch} = this.props;

        dispatch(logOutUser());
    }

    openSignIn() {
        this.setState({formMode: actionTypes.signIn, isFormOpened: true});
    }

    openSignUp() {
        this.setState({formMode: actionTypes.signUp, isFormOpened: true});
    }

    closeForm() {
        this.setState({isFormOpened: false});
    }

    toggleActionType() {
        this.setState(prevState => {
            if (prevState.formMode === actionTypes.signUp) {
                return Object.assign({}, prevState, {formMode: actionTypes.signIn});
            }
            if (prevState.formMode === actionTypes.signIn) {
                return Object.assign({}, prevState, {formMode: actionTypes.signUp});
            }
            return prevState;
        });
    }

    render() {
        const {user} = this.props;
        if (user.data) {
            return (
                <UserWelcome name={user.data.name} onSignOut={this.signOutHandler}/>
            );
        } else {
            return (
                <div>
                    <SigningControls onSignIn={this.openSignIn} onSignUp={this.openSignUp}/>
                    <Modal
                        onRequestClose={this.closeForm}
                        isOpen={this.state.isFormOpened}
                        style={modalStyles}
                        contentLabel="Modal"
                    >
                        <SigningForm
                            formMode={this.state.formMode}
                            onSubmit={this.submitHandler}
                            onToggleFormMode={this.toggleActionType}
                        />
                    </Modal>
                </div>
            );
        }
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(ProfileActions);