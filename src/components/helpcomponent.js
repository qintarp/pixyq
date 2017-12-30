import React, { Component } from 'react';
import {Label,Button,Form,ControlLabel,FormControl} from 'react-bootstrap';
import GoX from 'react-icons/lib/go/x';


class helpComponent extends Component {
    constructor(props){
	super(props);
	this.state={x:0,y:0};
	
    }
    
    
    
    
    render() {
	//Beware,these parts are messy
	var block={display:"block"};
	var textCust={textDecoration:"underline",fontSize:16};
	var formCustom={display:"inline",width:30,height:20};
	var formCustomText={display:"inline",width:65,height:30,backgroundColor:"rgb(100,100,100)",borderColor:"rgba(150,150,150,0.3)",color:"white"};
	var exit={color:"gray"};
	var classDiv={width:20,height:20,color:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)"};
	var buttonCustom={borderWidth:1,borderColor:"rgba(150,150,150,0.3)",backgroundColor:"#4a4f44"};

	
    return (
	<div className="newFilePopup">
	  <div className='popup2'>
        <div className='popup_inner'>
          <div style={classDiv} onClick={()=>this.props.removeHelp()}  ><GoX style={exit}/></div>
	  <h4>Keyboard Shortcuts</h4>
	  <div>
	  <ul>
	    <li><Label>x</Label> : Pencil</li>
	    <li><Label>d</Label> : Eraser</li>
	    <li><Label>z</Label> : Switch colors</li>
	  </ul>
	  </div>
	</div>
        </div>
      </div>
      
    );
  }
}

export default helpComponent;


