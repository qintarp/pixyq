import React, { Component } from 'react';
import {Label,Button,Form,ControlLabel,FormControl} from 'react-bootstrap';
import GoX from 'react-icons/lib/go/x';


class contactComponent extends Component {
    constructor(props){
	super(props);
	this.state={x:0,y:0};
	
    }
    
    
    
    
    render() {
	//Beware,these parts are messy
	var block={display:"block"};
	var exit={color:"gray"};
	var classDiv={width:20,height:20,color:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)"};
	var buttonCustom={borderWidth:1,borderColor:"rgba(150,150,150,0.3)",backgroundColor:"#4a4f44"};

	
    return (
	<div className="newFilePopup">
	  <div className='popup3'>
        <div className='popup_inner'>
          <div style={classDiv} onClick={()=>this.props.removeContactComp()}  ><GoX style={exit}/></div>
	  <h4>Contact Me</h4>
	  <div>
	  <ul>
	    <li><h5>My Mail : </h5>qintarp@gmail.com</li>
	  </ul>
	  </div>
	</div>
        </div>
      </div>
      
    );
  }
}

export default contactComponent;



