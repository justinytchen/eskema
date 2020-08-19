import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TextFieldWidget from './widgets/TextFieldWidget';
import NumberWidget from './widgets/NumberWidget';
import DashboardCanvas from './DashboardCanvas';
import DashboardNav from './DashboardNav';

class DashboardViewer extends Component{
    render(){
      
        return (
            <div className="dashboard-viewer">
                <DashboardNav />
                <DashboardCanvas />
            </div>
        );
    }
}

export default DashboardViewer;
