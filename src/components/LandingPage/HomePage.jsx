import React, {Component} from 'react';
import { AuthUserContext } from '../../session';
import Portal from '../Portal/Portal';
import LandingPage from './LandingPage';
import "./LandingPage.css";

class HomePage extends Component{
    render(){
        return (
            <div>
                <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <Portal {...this.props}/> : <LandingPage  {...this.props}/>
                }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}


export default HomePage;
