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
    var tempTextToDisplay="coins";
    if(prevMovePlayer.numOfcoinsTakenInPrevMove===1){
       tempTextToDisplay="coin";
    }
    if(playerName==="YOU"){
        playerName="Your";
    }else{
        playerName+="'s";
    }
    var maxNumOfCoinThatCanBeTaken=(NUM_OF_COINS_LEFT_IN_THE_GAME>getCurPlayer().maxCoinLimit)? getCurPlayer().maxCoinLimit:NUM_OF_COINS_LEFT_IN_THE_GAME;
    $("#FlashDiv").html(playerName+" turn. "+prevMovePlayer+" took "+prevPlayer.numOfCoinsTakeninPrevMove+" "+tempTextToDisplay+" in previous move."+"<br>Now you can take at most "+ maxNumOfCoinThatCanBeTaken.toString()+" coins. "
           +"The sum of coins which you are taking is <span id='sumOfValues'></span>" );
    
}

