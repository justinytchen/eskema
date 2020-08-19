import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TextFieldWidget from '../widgets/TextFieldWidget';
import NumberWidget from '../widgets/NumberWidget';

class DashboardCanvas extends Component{
    render(){
      
        return (
            <div className="dashboard-canvas">
                <TextFieldWidget />
                <NumberWidget />
                    <TextFieldWidget />
                    <NumberWidget />
                        <TextFieldWidget />
                        <NumberWidget />
            </div>
        );
    }
}

export default DashboardCanvas;
