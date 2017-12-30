import React, { Component } from 'react';
import {ButtonGroup,MenuItem,DropdownButton} from 'react-bootstrap';
import NewFilePopup from './newFilePopup.js';


class topside extends Component {
    constructor(props){
	super(props);
	this.state={NewFile:null};
    }
    renderBack(t,x,y){
	    t.props.appHandle.setState={x:x,y:y};

    }
    
    
    render() { 
	function newFileComp(t){
	    t.props.newFileHandle(<NewFilePopup xyHandle={t.props.xyHandle} removeNF={t.props.removeNF}  />);

	}
	
	
    return (
	<div className="topside">
	  <div className="alignleft">
	  <ButtonGroup>
	    <DropdownButton title="File" bsStyle="custom" id="file-dropdown">
	  <MenuItem eventKey="1" onClick={()=>newFileComp(this)}>New</MenuItem>
	  <MenuItem eventKey="2" onClick={()=>this.props.exportToPNG()}>Export</MenuItem>
	    </DropdownButton>
	    <DropdownButton title="Help" bsStyle="custom" id="file-dropdown">
	      <MenuItem eventKey="1" onClick={()=>this.props.helpComp()}>Help</MenuItem>
	      <MenuItem divider />
	      <MenuItem eventKey="2" onClick={()=>this.props.contactComp()}>Contact</MenuItem>
    </DropdownButton>
	  </ButtonGroup>
	  </div>
	  

	  
      </div>
    );
  }
}

export default topside;
