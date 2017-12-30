import React, { Component } from 'react';
import RowButton from './rowButton.js';

class board extends Component {

    constructor(props){
	super(props);
	this.state={buttonSize:8,selectedTool:1};

    }

    upButtonSize(){
	this.setState({buttonSize:this.state.buttonSize+1});
    }
    
    downButtonSize(){
	this.setState({buttonSize:this.state.buttonSize-1});
    }

   handleWheel(event){
	if(event.deltaY>0)
	    this.downButtonSize();
	else
	    this.upButtonSize();
    }
    setSelectedTool(x){
	this.setState({selectedTool:x});
	
    }
    RenderBoard(x,y){
	    
	    var array=[];
	    
	    for(var i=0;i<x;i++){
		array=array.concat(<RowButton buttonSize={this.state.buttonSize}  rowid={i} getMainColor={()=>this.props.getMainColor()}  columnCount={y} selectedTool={this.state.selectedTool} ref={instance=>{this.row.push(instance);}}   isM1Down={()=>this.props.isM1Down()} />);
		
	                        }
	    
	    return(array);
	    
                                 }



    
    
    row=[];
    render() {
	

	return (
	    
	    <div onWheel={(event)=>this.handleWheel(event)}  className="boardComponent">
	  
	      {this.RenderBoard(this.props.x,this.props.y)} 
	      
	    </div>
	);
    }

    
}

export default board;


