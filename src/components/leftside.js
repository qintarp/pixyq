import React, { Component } from 'react';
import {Button,ToggleButtonGroup,ToggleButton,Panel} from 'react-bootstrap';
import FaEraser from 'react-icons/lib/fa/eraser';
import TiPencil from 'react-icons/lib/ti/pencil';
import FaPlus from 'react-icons/lib/fa/plus-square-o';
import {SketchPicker} from 'react-color';


class leftside extends Component {
    constructor(props){
	super(props);
	this.state={ showCP1: false, showCP2: false,color2:{r:'12',g:'23',b:'55',a:'255'},color1:{r:'150',g:'150',b:'100',a:'255',value:[1]}
		   };
    }
    color1={r:'255',g:'255',b:'255',a:'255'};
    color2={r:'12',g:'33',b:'11',a:'255'};
    handleChange1(color){
	this.setState({color1:color.rgb});
	this.props.setMainColor(color.rgb);
    }
    handleChange2(color){
	this.setState({color2:color.rgb});
	this.props.setSecondColor(color.rgb);
    }
    handleClick1(t){
	this.setState({showCP1 : !t.state.showCP1 });
    }
    handleClick2(t){
	this.setState({showCP2 : !t.state.showCP2 });
    }
    handleBGChange(value){
	this.props.setSelectedTool(value);
	this.setState({value:value});
    }
    switchMain(){
	var c1=this.state.color1;var c2=this.state.color2;
	this.props.setMainColor(c2);
	this.props.setSecondColor(c1);
	this.setState({color1:c2,color2:c1});
	

	
    }
    switchTool(x){
	this.props.setSelectedTool(x);
	this.setState({value:x});
    }
   


    render() {

	var popover={position: 'absolute',
		     zIndex: '2',
		     top:130
		    };
	var cover={          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px'

		  };
	
	var color = {
	    backgroundColor:"#2c302b",
	    borderColor:"#544e4a"
        };
	var overridePalette={textAlign:"left",verticalAlign:"top"};
	var colorOne={backgroundColor:"rgb("+this.state.color1.r+","+ this.state.color1.g+","+this.state.color1.b+")"};
	var colorTwo={backgroundColor:"rgb("+this.state.color2.r+","+ this.state.color2.g+","+this.state.color2.b+")"};
	return (
	    

	    <div className="leftside">
	      
	      <div className="margin25">
		<Panel style={color}>
		  <ToggleButtonGroup value={this.state.value}   onChange={(value)=>this.handleBGChange(value)} type="radio" name="options" defaultValue={1}>
		    <ToggleButton id="1"  bsStyle="custom" value={1}><TiPencil/></ToggleButton>
		    <ToggleButton id="2"  bsStyle="custom" value={2}><FaEraser/></ToggleButton>
		  </ToggleButtonGroup>
		  <div className="colorPicker">
		    <div className="cOne">
		      <div style={colorOne} onClick={()=>this.handleClick1(this)}  className="wrapColors">
			{ this.state.showCP1 ? <div style={popover }>
			      <div style={ cover }/>
				  <SketchPicker color={ this.state.color1 } onChange={color1=> this.handleChange1(color1)} />
			</div> : null }
		      </div>
		      <div className="addPalette"><Button onClick={()=>this.props.addPalette()} bsStyle="custom" bsSize="xsmall"><FaPlus/></Button></div>
		    </div>
		    <div className="wrapColors2">
		    <div style={colorTwo} onClick={()=>this.handleClick2(this)}  className="wrapColors">
		      { this.state.showCP2 ? <div style={popover}>
			    <div style={ cover }/>
				<SketchPicker color={ this.state.color2 } onChange={color=> this.handleChange2(color)} />
		      </div> : null }
		    </div>
		    </div>
		  </div>
		  
		</Panel>
		
	      </div>
		{this.state.fcpicker}
		{this.state.scpicker}
	    </div>
	);
    }
}

export default leftside;
