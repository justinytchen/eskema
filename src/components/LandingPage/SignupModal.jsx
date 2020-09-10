import React, {Component} from 'react';
import { Button, Modal, Form, Alert } from 'react-bootstrap';
import { withFirebase } from '../../firebase'

const INITIAL_STATE = {
  email: '',
  password1: '',
  password2: '',
  error: null,
  show:false
};

class SignupModalBase extends Component{
  
    constructor(props){
        super(props);
        this.state = {
          show:false,
          email:"",
          password1:"",
          password2:""
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

    onPassword1Change(e){
      this.setState({
          password1:e.target.value
      });
    }

    onPassword2Change(e){
      this.setState({
          password2:e.target.value
      });
    }

    onSubmit(event){
      const { email, password1 } = this.state;
    
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password1)
        .then(authUser => {
          this.props.firebase.addUser("Name", email, authUser.user.uid);
          this.setState({ ...INITIAL_STATE });
        })
        .catch(error => {
          this.setState({ error });
          console.log(error);
        });
    
      event.preventDefault();
    }
    
    render(){
      const {
        username,
        email,
        password1,
        password2,
        error,
      } = this.state;
   
      const isInvalid =
        password1 !== password2 ||
        password1 === '' ||
        email === '';
    
      return (
          <>
            <Button variant="primary" onClick={this.handleShow.bind(this)}>
              Sign up
            </Button>

            <Modal show={this.state.show} onHide={this.handleClose.bind(this)}>
              <Modal.Header closeButton>
                <Modal.Title>Sign up</Modal.Title>
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

                      <Form.Group controlId="formBasicPassword1">
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={(pass) => this.onPassword1Change(pass)}/>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword2">
                          <Form.Label>Confirm Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={(pass) => this.onPassword2Change(pass)}/>
                      </Form.Group>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose.bind(this)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={(e) => this.onSubmit(e)} disabled = {isInvalid ? true:false}>
                  Create Account
                </Button>
              </Modal.Footer>
            </Modal>
          </>
      );
    }
}
const SignupModal = withFirebase(SignupModalBase);
export default SignupModal;
