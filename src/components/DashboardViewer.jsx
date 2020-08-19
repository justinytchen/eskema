import React, {Component} from 'react';
import Draggable from 'react-draggable';
import TextWidget from './widgets/TextWidget';
import NumberWidget from './widgets/NumberWidget';

class DashboardViewer extends Component{


    toggleEditMode(){
        console.log("double clicked");
    }
  render(){
      
    return (
      <div className="DashboardViewer">
        viewer {this.props.match.params.id}
        <TextWidget />
        <NumberWidget />
      </div>
    );
  }
}

export default DashboardViewer;
