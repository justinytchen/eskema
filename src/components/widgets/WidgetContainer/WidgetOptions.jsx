import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class WidgetOptions extends Component{
    render(){
        return (
            <div className = "widget-options">
                <Button variant="secondary" className = "options-button">
                    <span className = "options-button-text">...</span>
                </Button>
            </div>
        );
    }
}

export default WidgetOptions;