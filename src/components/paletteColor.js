import React, { Component } from 'react';


class paletteColor extends Component {
    
    constructor(props){
	super(props);
        
    }
    
    
    
    render() {
	
	var color={backgroundColor:"rgb("+this.props.color.r+","+this.props.color.g+","+this.props.color.b+")"};
    return (
	<div className={"paletteColor"} style={color} onClick={()=>this.props.changeColor(this.props.color)}>

	  
	  </div>
    );
  }
}

export default paletteColor;

