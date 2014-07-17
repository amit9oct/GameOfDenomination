/* 
 * 
 */
function Player(playerType,name){
    this.type=playerType;
    this.name=name;
    this.score=0;
    this.coinStackHeadPointer=0;
    this.playerCoinStack=new Array();
    this.turn=false;
    this.maxCoinLimit=1;
    this.numOfCoinsTakeninPrevMove=0;
}
Player.prototype.pushCoin=function(coin){
   if(this.coinStackHeadPointer<NUM_OF_COINS){
       this.playerCoinStack[this.coinStackHeadPointer]=coin;
       this.coinStackHeadPointer++;
   }
};
Player.prototype.getScore=function(){
    this.score=0;
    for(var i=0;i<this.coinStackHeadPointer;i++)
      this.score=this.score+this.playerCoinStack[i].value;
   return this.score;
};
Player.prototype.toggleTurn=function(){
   this.turn=!(this.turn); 
};