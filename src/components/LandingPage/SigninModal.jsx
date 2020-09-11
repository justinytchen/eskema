import React, {Component} from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { withFirebase } from '../../firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  show:false
};

class SigninModalBase extends Component{
    constructor(props){
        super(props);
        this.state = {
          show:false,
          email:"",
          password:""
        };
    }

    handleClose(){
      this.setState({ ...INITIAL_STATE });
    }
    
    handleShow(){
        this.setState({
            show:true
        });
    }

    onEmailChange(e){
      this.setState({
          email:e.target.value
      });
    }

    onPasswordChange(e){
      this.setState({
          password:e.target.value
      });
    }

    onSubmit(event){
        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then(() => {
            this.setState({ ...INITIAL_STATE });
            })
            .catch(error => {
            this.setState({ error });
            });

        event.preventDefault();
    }

    googleSignin(event){
      this.props.firebase.doSigninWithGoogleAuth();
    } 
    
    render(){
      const {
        username,
        email,
        password,
        error,
      } = this.state;
    
      return (
          <>
            <Button variant="primary" onClick={this.handleShow.bind(this)}>
              Sign in
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Sign in</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                { error ? 
                  <Alert variant="danger">
                    {error.message}
                  </Alert>
                  : null
                }
                
                  <Form>
                      <Form.Group controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control type="email" placeholder="Enter email" onChange={(user) => this.onEmailChange(user)}/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={(pass) => this.onPasswordChange(pass)}/>
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={(e) => this.googleSignin(e)}>
                  Sign in with Google
                </Button>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={(e) => this.onSubmit(e)}>
                  Submit
                </Button>
              </Modal.Footer>
            </Modal>
          </>
      );
    }
}
const SigninModal = withFirebase(SigninModalBase);
export default SigninModal;
