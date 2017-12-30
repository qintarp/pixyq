import React, { Component } from 'react';
import './App.css';
import Topside from './components/topside.js' ;
import Leftside from './components/leftside.js';
import Midside from './components/midside.js';
import Rightside from './components/rightside.js';
import {Row,Grid,Col} from 'react-bootstrap';
import FileSaver from 'file-saver';
import HelpComp from './components/helpcomponent.js';
import ContactComp from './components/contactcomponent.js';
import PaletteColor from './components/paletteColor.js';


class App extends Component {
    constructor(){
	super();
	this.state={x:16,y:16,NewFile:null,M1:false,secondColor:{},helpComp:<HelpComp removeHelp={()=>this.removeHelp()}/>,contactComp:null
		   };
    }
    setSelectedTool(x){
	this.midside.board.setSelectedTool(x);
	
    }
    contactComp(){
	this.setState({contactComp:<ContactComp removeContactComp={()=>this.removeContactComp()}/>});
    }

    removeContactComp(){
	this.setState({contactComp:null});
    }
    setSecondColor(x){
	this.secondColor=x;
    }
    secondColor="";
    
    setXY(x,y) {
	this.setState({x:x,y:y});
    }
    mainColor={r:'150',g:'150',b:'100',a:'255'};
    setMainColor(x){
	this.mainColor=x;
	for(var i=0;i<this.state.x;i++){
	    
	    this.midside.board.row[i].setMainColor(x);
	}
	this.leftside.setState({color1:x});
    }
    getMainColor(){
	return this.mainColor;
    }
    
    
    freeNewFile(){
	this.setState({NewFile:''});

    }
    
    exportToPNG(){
	//Start!
	var pixels=[];
	var width=this.state.x;
	var height=this.state.y;

	for(var i=0;i<this.state.x;i++){
	    for(var a=0;a<this.state.y;a++){
		
		var pixStyle=this.midside.board.row[i].col[a].getAttribute("style");
		var colorIndex=pixStyle.lastIndexOf("rgb(")+4;
		var color=pixStyle.slice(colorIndex,pixStyle.length-2);
		color=color.split(", ");
		for(var f=0;f<3;f++)
		    pixels.push(parseInt(color[f]));
		pixels.push(255);
		
	    }
	}
	

	//Canvas!
	var canvas = document.createElement('canvas');
	var context = canvas.getContext('2d');
	var imgData = context.createImageData(width, height);
	canvas.height = height;
	canvas.width = width;

	for(var c = 0; c < pixels.length; c++) {
	    imgData.data[c] = pixels[c];
	}
	context.putImageData(imgData, 0, 0);

	canvas.toBlob(function(blob) {
    FileSaver.saveAs(blob, "image.png");
});
	
	

    }
    keyHandler(event){
	if(event.key=='z')
	    this.leftside.switchMain();
	if(event.key=='x')
	    this.leftside.switchTool(1);
	if(event.key=='d')
	    this.leftside.switchTool(2);
    }
    pushToPalette(x){
	var colorArray=this.rightside.state.colorArray.concat(<PaletteColor changeColor={(x)=>this.setMainColor(x)} color={x}/>);
	this.rightside.setState({colorArray:colorArray});
    }
    
    helpComp(){
	this.setState({helpComp:<HelpComp removeHelp={()=>this.removeHelp()}/>});
    }
    removeHelp(){
	this.setState({helpComp:null});
    }

    



    
    render() {

	
	console.log("Rendered Main");
    return (
	<div className="App" onKeyDown={(event)=>this.keyHandler(event)} tabIndex="0" >
			    <Topside exportToPNG={()=>this.exportToPNG()}  newFileHandle={i => this.setState({NewFile: i})} xyHandle={this.setXY.bind(this)} helpComp={()=>this.helpComp()}  removeNF={this.freeNewFile.bind(this)} contactComp={()=>this.contactComp()}/>
	<div className="afterNav">
	  <Grid fluid={true}>
	    <Row>
	      <Col lg={2}><Leftside setSecondColor={(x)=>this.setSecondColor(x)}  setMainColor={(i)=>this.setMainColor(i)} setSelectedTool={(x)=>this.setSelectedTool(x)}  getMainColor={()=>this.getMainColor()} ref={instance=>{this.leftside=instance;}} addPalette={()=>this.pushToPalette(this.mainColor)} /></Col>
	      <Col lg={8} ><Midside ref={instance => { this.midside = instance; }}    getMainColor={()=>this.getMainColor()}  x={this.state.x} y={this.state.y} /></Col>
	      <Col lg={2} ><Rightside setMainColor={(x)=>this.setMainColor(x)} ref={instance => { this.rightside = instance; }} pushToPalette={(x)=>this.pushToPalette(x)}  /></Col>
	  </Row>
	  </Grid>
	  <div className="footside" />
	  {this.state.NewFile}
	  {this.state.helpComp}
	  {this.state.contactComp}
	</div>
      </div>
    );
  }
}

export default App;
