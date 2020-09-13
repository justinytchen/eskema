import React, {Component} from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {newGuid} from '../../util/ObjectUtils';
import { withFirebase } from '../../firebase';
import { connect  } from 'react-redux';
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
            <Button variant="outline-primary" onClick = {this.createNewBoard.bind(this)}>New Board</Button>
        );
    }
}

const NewBoardButton = withRouter(withFirebase(NewBoardButtonBase));
export default (NewBoardButton);