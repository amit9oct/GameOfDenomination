/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function flashAlert(){
    var playerName=null;
    var prevMovePlayer=null;
    if(CURR_TURN_PLAYER_ID==="Player1"){
        playerName=SCORE_CARD_PLAYER1.playerName;
        prevMovePlayer=SCORE_CARD_PLAYER2.playerName;
    }else{
        playerName=SCORE_CARD_PLAYER2.playerName;
        prevMovePlayer=SCORE_CARD_PLAYER1.playerName;
    }
    var prevPlayer=null;
    if(getCurPlayer().name==="Player1"){
        prevPlayer=player2;
    }else{
        prevPlayer=player1;
    }
    var tempTextToDisplay="coin";
    if(prevPlayer.numOfCoinsTakenInPrevMove>1){
       tempTextToDisplay="coins";
    }
    if(playerName==="YOU"){
        playerName="Your";
    }else{
        playerName+="'s";
    }
    var maxNumOfCoinThatCanBeTaken=(NUM_OF_COINS_LEFT_IN_THE_GAME>getCurPlayer().maxCoinLimit)? getCurPlayer().maxCoinLimit:NUM_OF_COINS_LEFT_IN_THE_GAME;
    var tempText=null;
    if(maxNumOfCoinThatCanBeTaken>1){
        tempText="coins";
    }
    else{
        tempText="coin";
    }
    $("#FlashDiv").html(playerName+" turn. "+prevMovePlayer+" took "+prevPlayer.numOfCoinsTakenInPrevMove+" "+tempTextToDisplay+" in previous move."+"<br>Now you can take at most "+ maxNumOfCoinThatCanBeTaken.toString()+" "+tempText+". "
           +"The sum of values coins which you are taking is <span id='sumOfValues'></span>" );
    
}

