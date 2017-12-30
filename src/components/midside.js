import React, { Component } from 'react';
import Board from './board.js';

class midside extends Component {
    constructor(){
	super();
	

    }
    
    M1=false;
       isM1Down(){
	if(this.M1)
	    return true;
	return false;
    }
  
   
    
    
    render() {
	
	
    return (
	<div className="midside" onMouseUp={()=>{this.M1=false;}} onMouseDown={()=>{this.M1=true;}}  >
	  <Board x={this.props.x} y={this.props.y}   ref={instance => { this.board = instance; }} getMainColor={()=>this.props.getMainColor()} isM1Down={()=>this.isM1Down()} />
	</div>
    );
  }
}

export default midside;

