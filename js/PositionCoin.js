/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PositionOfCoin(inPos,leftFromFrame,topFromFrame){
  this.inStackPos=inPos;
  this.leftFromFrame=leftFromFrame;
  this.topFromFrame=topFromFrame;
  this.getLeftLoc=function(){return (this.leftFromFrame.toString()+"px");};
  this.getTopLoc=function() {return (this.topFromFrame.toString()+"px");};
  this.getStackPos=function() {return (this.inStackPos);};
  this.showPosition=function(){return("stackPos:"+this.inStackPos+" left:"+this.getLeftLoc()+" top:"+this.getTopLoc());};
}
 function Position(leftFromFrame,topFromFrame){
  this.leftFromFrame=leftFromFrame;
  this.topFromFrame=topFromFrame;
  this.getLeftLoc=function(){return (this.leftFromFrame.toString()+"px");};
  this.getTopLoc=function() {return (this.topFromFrame.toString()+"px");};
  this.showPosition=function(){return("left: "+this.getLeftLoc()+" top: "+this.getTopLoc());};
}