import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';
import PaletteColor from './paletteColor.js';


class rightside extends Component {
    constructor(props){
	super(props);
	this.state={colorArray:[<PaletteColor changeColor={(x)=>this.props.setMainColor(x)} color={{r:'52',g:'153',b:'70',a:'255'}}/>,<PaletteColor changeColor={(x)=>this.props.setMainColor(x)} color={{r:'52',g:'153',b:'100',a:'255'}}/>,<PaletteColor changeColor={(x)=>this.props.setMainColor(x)} color={{r:'52',g:'153',b:'130',a:'255'}}/>,<PaletteColor changeColor={(x)=>this.props.setMainColor(x)} color={{r:'152',g:'153',b:'70',a:'255'}}/>]};

	
    }

    render() {
	var color = {
	    backgroundColor:"#2c302b",
	    borderColor:"#544e4a"
        };
	var color1 = {
	    backgroundColor:"#FFFFFF",
	    color:"#FFFFFF"
        };

	
	return (
	    

	    <div className="leftside">
	      	      <div className="margin25">
			<Panel style={color}>
			  <h4 className="paletteHeader">Palette</h4>
			  {this.state.colorArray}
			  </Panel>
		
	      </div>
	    </div>
	);
    }
}

export default rightside;

