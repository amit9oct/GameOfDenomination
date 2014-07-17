/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Coins(value,postion){
    this.isFlipped=false;
    this.flip=function(){if(this.isFlipped){this.isFlipped=false;}else{this.isFlipped=true;}};
    this.pos=postion;
    this.isVissible=true;
    this.toggleVissiblity=function(){if(this.isVissible){this.isVissible=false;}else{this.isVissible=true;}};
    this.value=value;
    this.canBeTaken=true;
    this.changeCoinColor=function(){if(this.canBeTaken){this.canBeTaken=false;}else{this.canBeTaken=true;}};
    this.isInGame=true;
    this.outOfGame=function(){this.isInGame=false; return this.isInGame;};
    this.bringBackInGame=function() {this.isInGame=true; return this.isInGame;};
}
Coins.prototype.updatePosition=function(pos){
  this.pos={inStackPos: pos.inStackPos,leftFromFrame: pos.leftFromFrame,topFromFrame: pos.topFromFrame};    
};