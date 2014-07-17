/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function display(){
    for(var i=0;i<NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
       var tempCoin=COIN_STACK[NUM_OF_COINS_LEFT_IN_THE_GAME-i-1];
       addCoinToDisplay(tempCoin);
   }
   var playerTopLocation=Number($("#GameFrame").height())/2;
   var player1LeftLocation=DEFAULT_MARGIN;
   //$("#imgPlayer1").css({position:'absolute',top:playerTopLocation,left:player1LeftLocation});
   //$("#imgPlayer2").css({position:'absolute',top:playerTopLocation,left:Number($("#GameFrame").width())-player1LeftLocation-PLAYER_IMG_WIDTH});
   $("#Player1").css({position:'absolute',top:playerTopLocation,left:player1LeftLocation});
   $("#Player2").css({position:'absolute',top:playerTopLocation,left:Number($("#GameFrame").width())-player1LeftLocation-PLAYER_IMG_WIDTH});
}
function getSrcOfTheCoin(coin){
    if(coin.isFlipped){
        return SILVER_COIN_FRONT_VIEW;
    }
    else
        return SILVER_COIN_SIDE_VIEW;
}
function addCoinToDisplay(coin){
    var inStackPos=coin.pos.inStackPos;
    var coinName="Coin"+inStackPos.toString();
    var codeToBeAppended="<img class='notSelected' id="+"'img"+coinName+"'"+" src="+"\""+getSrcOfTheCoin(coin)+"\""+"><span class='coinSpan' id='span"+coinName+"'></span>";
    if(coin.isFlipped){
        codeToBeAppended="<img class='notSelected' id="+"'img"+coinName+"'"+" src="+"\""+getSrcOfTheCoin(coin)+"\""+"><span class='coinSpan' id='span"+coinName+"'></span>";
    }
    $(codeToBeAppended).appendTo("#CoinPlane");
    displayCoin(coin);
    displaySpan(coin);
    var coinSpanId="span"+coinName;
    var span=document.getElementById(coinSpanId);
    span.innerHTML=coin.value.toString();
}
function displayCoin(coin){
    var coinName="Coin"+coin.pos.inStackPos.toString();
    var prepCoinName="#"+"img"+coinName;
    $(prepCoinName).css({position:'absolute',left:coin.pos.leftFromFrame,top:coin.pos.topFromFrame});
}
function displaySpan(coin){
    var heightOfCoin=0;
    var font_size=HEIGHT_OF_COIN;
    var diamOfCoin=DIAM_OF_COIN;
    if(coin.isFlipped)
        heightOfCoin=DIAM_OF_COIN;
    var coinName="Coin"+coin.pos.inStackPos.toString();
    var coinSpanId="span"+coinName;
    $("#"+coinSpanId).css({position:'absolute',left:coin.pos.leftFromFrame+diamOfCoin+HEIGHT_OF_COIN,top:coin.pos.topFromFrame-font_size/2+heightOfCoin/2});
    $("#"+coinSpanId).css('font-size',font_size);
}
function flipTheCoin(coin){
    coin.flip();
    var tempCoinImgID="imgCoin"+coin.pos.inStackPos;
    var tempCoinImg=document.getElementById(tempCoinImgID);
    tempCoinImg.src=getSrcOfTheCoin(coin);
    tempCoinImg.class="notSelected";
}
function shiftAllUp(inStackPos,shiftValue){
    for(var i=NUM_OF_COINS_LEFT_IN_THE_GAME-1;i>=inStackPos;i--){
        COIN_STACK[i].pos.topFromFrame=COIN_STACK[i].pos.topFromFrame-shiftValue;
        displayCoin(COIN_STACK[i]);
        displaySpan(COIN_STACK[i]);
    }
}
function shiftUp(inStackPos,shiftValue){
    COIN_STACK[inStackPos].pos.topFromFrame=COIN_STACK[inStackPos].pos.topFromFrame-shiftValue;
    displayCoin(COIN_STACK[inStackPos]);
    displaySpan(COIN_STACK[inStackPos]);
}
function showSpan(inStackPos){
    for(var i=NUM_OF_COINS_LEFT_IN_THE_GAME;i>=inStackPos;i--){
        var coinName="Coin"+i.toString();
        var coinSpanId="#"+"span"+coinName;
        $(coinSpanId).show();
    }
}
function hideSpan(){
    $(".coinSpan").hide();
}
function removeAllCoinsFromDisplay(pos){
    for(var i=NUM_OF_COINS_LEFT_IN_THE_GAME-1;i>=pos;i--){
        var coinName="Coin"+i.toString();
        $("#img"+coinName).remove();
        $("#span"+coinName).remove();
    }
}
function removeCoinFromDisplay(pos){
    var coinName="Coin"+pos.toString();
    $("#img"+coinName).remove();
    $("#span"+coinName).remove();
}
function hideSpan(inStackPos){
    for(var i=NUM_OF_COINS_LEFT_IN_THE_GAME;i>=inStackPos;i--){
        var coinName="Coin"+i.toString();
        var coinSpanId="#"+"span"+coinName;
        $(coinSpanId).hide();
    }
}
function updateScoreOnDisplay(){
    SCORE_CARD_PLAYER1.updateScore();
    $("#scoreCardPlayer1").html(SCORE_CARD_PLAYER1.playerName+"<br>"+SCORE_CARD_PLAYER1.score);
    SCORE_CARD_PLAYER2.updateScore();
    $("#scoreCardPlayer2").html(SCORE_CARD_PLAYER2.playerName+"<br>"+SCORE_CARD_PLAYER2.score);
}
function initScoreCard(){
    $("<div id='scoreCardPlayer1' class='scoreCard'></div>").appendTo("#GameFrame");
    $("<div id='scoreCardPlayer2' class='scoreCard'></div>").appendTo("#GameFrame");
    SCORE_CARD_PLAYER1.updateScore();
    $("#scoreCardPlayer1").html(SCORE_CARD_PLAYER1.playerName+"<br>"+SCORE_CARD_PLAYER1.score);
    SCORE_CARD_PLAYER2.updateScore();
    $("#scoreCardPlayer2").html(SCORE_CARD_PLAYER2.playerName+"<br>"+SCORE_CARD_PLAYER2.score);
    $("#scoreCardPlayer1").css({position:'absolute',left:SCORE_CARD_PLAYER1.pos.leftFromFrame,top:SCORE_CARD_PLAYER1.pos.topFromFrame});
    $("#scoreCardPlayer2").css({position:'absolute',right:SCORE_CARD_PLAYER1.pos.leftFromFrame,top:SCORE_CARD_PLAYER2.pos.topFromFrame});
}