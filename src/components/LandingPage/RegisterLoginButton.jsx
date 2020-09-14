import React, {Component} from 'react';
import { withFirebase } from '../../firebase';
import {Button} from 'react-bootstrap';

class RegisterLoginButtonBase extends Component{
    onRegisterLogin() {
        this.props.firebase.authMgr
            .doSigninWithGoogleAuth()
            .then(authUser => {
                this.props.firebase.userMgr.addUser(authUser.user);
            })
            .catch(error => {
                this.setState({ error });
                console.log(error);
            });
    }
    
    render(){
        return(
            <Button className = "light-text-button" variant="outline-secondary" onClick={() => this.onRegisterLogin()}>Register/Login</Button>
        );
    }
}

const RegisterLoginButton = withFirebase(RegisterLoginButtonBase);
export default RegisterLoginButton;