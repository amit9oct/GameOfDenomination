/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var player1=null;
var player2=null;
function initPostionOfLastCoin(){
    POSITION_OF_LAST_COIN_SELECTED=NUM_OF_COINS_LEFT_IN_THE_GAME;
}
function initGameParameters(playerName){
    CURR_TURN_PLAYER_ID=playerName;
     if(GAME_TYPE==="TWO_PLAYER"){
        player1=new Player("HUMAN","Player1");
        player2=new Player("HUMAN","Player2");
    }
    else{
        player1=new Player("HUMAN","Player1");
        player2=new Player("COMPUTER","Player2");
    }
    if(playerName==="Player1")
      player1.maxCoinLimit=2;
    else
      player2.maxCoinLimit=2;
    setMaxCoinLimit(NUM_OF_COINS_LEFT_IN_THE_GAME-1);
    if(GAME_TYPE!=="SINGLE_PLAYER"){
    SCORE_CARD_PLAYER1=new ScoreCard(player1,0,"PLAYER1");
    SCORE_CARD_PLAYER2=new ScoreCard(player2,0,"PLAYER2");
    }else{
    SCORE_CARD_PLAYER1=new ScoreCard(player1,0,"YOU");
    SCORE_CARD_PLAYER2=new ScoreCard(player2,0,"COMPUTER");
    }
    SCORE_CARD_PLAYER1.assignPosition();
    SCORE_CARD_PLAYER2.assignPosition();
    SCORE_CARD_PLAYER1.updateScore();
    SCORE_CARD_PLAYER2.updateScore();
    initPostionOfLastCoin();
}
function AnimateAllCoinsUp(coinsToShift){
    for(var i=1;i<=coinsToShift;i++){
           AnimateUp(NUM_OF_COINS_LEFT_IN_THE_GAME-i,DEFAULT_SHIFT_UP);
       }
}
function animationsTest (callback) {
    // Test if ANY/ALL page animations are currently active

    var testAnimationInterval = setInterval(function () {
        if (! $.timers.length) { // any page animations finished
            clearInterval(testAnimationInterval);
            callback();
        }
    }, 25);
};
function gameLoop(){
    if(CURR_TURN_PLAYER_ID==="Player1"){
         console.log("Entered Game loop CURR_PLAYER= "+getCurPlayer().name);
    }else{
       console.log("Entered Game loop CURR_PLAYER= "+getCurPlayer().name);
       var coinsToShift=Algo();
       //alert(coinsToShift);
       //alert(coinsToShift+"POS="+POSITION_OF_LAST_COIN_SELECTED+"last coin to go ="+(POSITION_OF_LAST_COIN_SELECTED-coinsToShift+1));
        AnimateAllCoinsUp(coinsToShift);
        animationsTest(function () {
         // your callback (things to do after all animations are done)
         updateSum(POSITION_OF_LAST_COIN_SELECTED-coinsToShift);
         assignCoinsToCurrPlayer(POSITION_OF_LAST_COIN_SELECTED-coinsToShift);
         updateScoreOnDisplay();
         initPostionOfLastCoin();
         COIN_SELECTED=false;
        });
    }
}
function setMaxCoinLimit(lastTake){
    if(getCurPlayer()===player1)
        player2.maxCoinLimit=2*lastTake;
    else
        player1.maxCoinLimit=2*lastTake;
}
function getNextTurnPlayer(){
    if(CURR_TURN_PLAYER_ID==="Player1"){
       return player2;
    }else{
       return player1;
    }
}
function getCurPlayer(){
    if(CURR_TURN_PLAYER_ID==="Player1"){
       return player1;
    }else{
       return player2;
    }
}
//Works Fine
function switchTurn(){
    //console.log("turn is goining to be swtiched");
    if(NUM_OF_COINS_LEFT_IN_THE_GAME===0){
        //Check who has more coins
        var message=null;
        if(player1.getScore()>player2.getScore()){
            message=SCORE_CARD_PLAYER1.playerName+" won!!";
        }else if(player2.getScore()>player1.getScore()){
            message=SCORE_CARD_PLAYER2.playerName+" won!!";
        }else{
            message=" Its A Draw !!";
        }
        message+="\n"+"Want to play again?";
        var ConfirmBox=confirm(message);
        if(ConfirmBox===true){
            window.location.reload();
        }else{
            //Do nothing
        }
    }
    else if(CURR_TURN_PLAYER_ID==="Player1"){
        CURR_TURN_PLAYER_ID="Player2";
    }else{
        CURR_TURN_PLAYER_ID="Player1";
    }
    flashAlert();
}
function assignCoinsToCurrPlayer(pos){
    console.log("numOfCoinsLeft= "+NUM_OF_COINS_LEFT_IN_THE_GAME+" currentPlayerName: "+getCurPlayer().name+" currentPlayerMaxCoinLimit: "+getCurPlayer().maxCoinLimit);
    var numOfCoinsAttemptedToBeTaken=NUM_OF_COINS_LEFT_IN_THE_GAME-pos;
    //console.log("pos= "+pos);
    if(numOfCoinsAttemptedToBeTaken<=getCurPlayer().maxCoinLimit){
        var i=NUM_OF_COINS_LEFT_IN_THE_GAME-1;
        //console.log(" i= "+i+"NUM_OF_COINS_LEFT_IN_THE_GAME= "+NUM_OF_COINS_LEFT_IN_THE_GAME+" pos= "+pos);
        for(;i>=pos;i--){
         var tempCoin=popFromStack();
            removeCoinFromDisplay(i);
         getCurPlayer().pushCoin(tempCoin);
         COINS_CONSUMED++;
       }
       //console.log("Number of coins taken by "+getCurPlayer().name+" is "+getCurPlayer().coinStackHeadPointer);
       //console.log("Score of "+getCurPlayer().name+" is "+getCurPlayer().getScore());
       //alert("Score of "+getCurPlayer().name+" is "+getCurPlayer().getScore());
       //console.log("NumberOfCoinsLeftInGame= "+NUM_OF_COINS_LEFT_IN_THE_GAME);
       setMaxCoinLimit(numOfCoinsAttemptedToBeTaken);
        getCurPlayer().numOfCoinsTakenInPrevMove=numOfCoinsAttemptedToBeTaken;
       switchTurn();
    }else{
        //Do nothing
    }
}
