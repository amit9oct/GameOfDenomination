/* 
 * Manages the scores of the two player.
 */
function ScoreCard(player,score,playerName){
    this.player=player;
    this.playerName=playerName;
    this.score=score;
    this.pos=null;
}
ScoreCard.prototype.assignPosition=function(){
    var topFromFrame=$("#GameFrame").height()/2-PLAYER_SCORE_CARD_MARGIN*2;
    if(this.player.name==="Player1"){
        var leftFromFrame=PLAYER_SCORE_CARD_MARGIN;
        this.pos=new Position(leftFromFrame,topFromFrame);
    }
    else{
         var leftFromFrame=$("#GameFrame").width()-PLAYER_SCORE_CARD_MARGIN;
         this.pos=new Position(leftFromFrame,topFromFrame);
    }
    //console.log("Successfully changed the position"+this.pos.showPosition());
};
ScoreCard.prototype.updateScore=function(){
    this.score=this.player.getScore();
    //console.log("Successfully updated score of "+this.player.name+" to "+this.score);
};

