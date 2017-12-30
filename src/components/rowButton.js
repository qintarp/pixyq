import React, { Component } from 'react';

class rowButton extends Component {
   
    
    blues={backgroundColor:"blue",color:"red",height:500};
    mainColor={r:'150',g:'150',b:'100',a:'255'};
    setMainColor(x){

	this.mainColor=x;
    }

    
    paintPix(event,tool){
	switch(tool){
	case 1:
	    event.target.setAttribute("style", event.target.getAttribute('style')+";background-color:rgb("+this.mainColor.r+", "+this.mainColor.g+", "+this.mainColor.b+");");break;
	case 2:
	    event.target.setAttribute("style", event.target.getAttribute('style')+";background-color:rgb(255, 255, 255);");break;

	}
    }
    	
    
    handleMouseOver(event){
	if(this.props.isM1Down()){
	    this.paintPix(event,this.props.selectedTool);
	}
    }
    handleMouseDown(event){
	    this.paintPix(event,this.props.selectedTool);
	
    }
    ReturnRow(colCount,rowId,style){
	    var array=[];
	    for(var i=0;i<colCount;i++){
		
		array=array.concat(<button onMouseOver={(event)=>this.handleMouseOver(event)} onMouseDown={(event)=>this.handleMouseDown(event)} row={rowId} col={i} style={style} className="square" ref={instance=>{this.col.push(instance);}}  />);
		
	   
	    }
	    return(array);
	}

    
    
    col=[];
    render() {
	
	var squarestyle={height:this.props.buttonSize
			 ,
			 width:this.props.buttonSize,
			 verticalAlign:"top",
			 backgroundColor:"rgb(255,255,255)"
			 
			};

	 

	var rowStyle={height:this.props.buttonSize-1};
	return (
	   
	    <div style={rowStyle}>
	  
	      {this.ReturnRow(this.props.columnCount,this.props.rowid,squarestyle)} 
	  
	</div>
	);
    }

    
}

export default rowButton;

