import React, { Component } from 'react';
import {Button,Form,ControlLabel,FormControl} from 'react-bootstrap';
import GoX from 'react-icons/lib/go/x';


class newFilePopup extends Component {
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

	function newButton(t){
	    t.props.xyHandle(null,null);
	    t.props.xyHandle(t.inputx.value,t.inputy.value);
	    t.props.removeNF();
	}

	
    return (
	<div className="newFilePopup">
	  <div className='popup'>
        <div className='popup_inner'>
          <div style={classDiv} onClick={()=>this.props.removeNF()}  ><GoX style={exit}/></div>
	  <Form>
	    <ControlLabel style={Object.assign(textCust,block)}>Size</ControlLabel>

	    <ControlLabel style={formCustom} >X: </ControlLabel>
      <FormControl style={formCustomText} inputRef={ref => { this.inputx = ref; }}   type="text" placeholder="x axis" />
    <ControlLabel style={formCustom} > Y: </ControlLabel>
    <FormControl style={formCustomText} type="text" inputRef={ref => { this.inputy = ref; }}    placeholder="y axis" />
      <Button style={Object.assign(buttonCustom,block)} bsStyle="customtwo"  onClick={()=>newButton(this)}>New!</Button>
	  </Form>
	  </div>
        </div>
      </div>
      
    );
  }
}

export default newFilePopup;

