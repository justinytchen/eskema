import React, {Component} from 'react';
import { AuthUserContext } from '../../session';
import LandingPageAuth from './LandingPageAuth';
import LandingPageNonAuth from './LandingPageNonAuth';

class LandingPage extends Component{
    render(){
        return (
            <div>
                <AuthUserContext.Consumer>
                {authUser =>
                    authUser ? <LandingPageAuth {...this.props}/> : <LandingPageNonAuth  {...this.props}/>
                }
                </AuthUserContext.Consumer>
            </div>
        );
    }
}


export default LandingPage;
