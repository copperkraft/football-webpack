import React, {Component} from 'react';
import {connect} from 'react-redux';

import {fetchUser, logInUser} from '../actions/user-actions';
import SigningForm, {actionTypes} from 'components/singning-form/signing-form';

class ProfileActions extends Component {
    constructor() {
        super();

        this.state = {formMode: actionTypes.signIn};

        this.submitHandler = this.submitHandler.bind(this);
        this.toggleActionType = this.toggleActionType.bind(this);
    }

    componentDidMount() {
        const {dispatch} = this.props;

        dispatch(fetchUser());
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user.data) {
            this.setState({formMode: actionTypes.edit});
        }
    }

    submitHandler(info) {
        const {dispatch} = this.props;

        dispatch(logInUser(info));
    }

    toggleActionType() {
        console.log(this.state);
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
                <div>
                    {user.data.name}
                </div>
            );
        } else {
            return <SigningForm action={this.state.formMode} onSubmit={this.submitHandler} onChangeAction={this.toggleActionType}/>;
        }
    }
}

function mapStateToProps(state) {
    return {user: state.user};
}

export default connect(mapStateToProps)(ProfileActions);