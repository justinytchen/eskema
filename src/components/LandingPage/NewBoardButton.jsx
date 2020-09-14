import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import { withFirebase } from '../../firebase';
import {withRouter} from 'react-router';

class NewBoardButtonBase extends Component{
    createNewBoard(){
        const user = this.props.firebase.authMgr.getCurrentUser();
        this.props.firebase.boardMgr.addNewBoard(user, (id) => this.redirectToBoardPage(id));
    }

    redirectToBoardPage(id){
        this.props.history.push("/board/" + id);
    }

    render(){
        return (
        <Button variant="primary" onClick = {this.createNewBoard.bind(this)}>{this.props.buttonText ? this.props.buttonText: "New Board"}</Button>
        );
    }
}

const NewBoardButton = withRouter(withFirebase(NewBoardButtonBase));
export default (NewBoardButton);