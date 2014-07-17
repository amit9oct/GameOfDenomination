/* 
 * Function startGame is like the game Controller.
 */

function startGame(){
    var gameType="Player1";
    if(GAME_TYPE==="SINGLE_PLAYER")
            gameType=$('input[name=selectFirstPlayerOpn]:checked','#level').val();
    initGameParameters(gameType);
    initScoreCard();
    document.getElementById("level").style.display = "none";
    document.getElementById("welcomeText").style.display = "none";
    randomUnbaisedStackGenerator(); // For generating unbaised random number
    /*var temprand="";
    for(var i=0;i<NUM_OF_COINS;i++){
        temprand=temprand+"\n"+RANDOM_NUMBERS[i].toString();
    }
    alert(temprand);*/
    InsertCoins();
    /*for(var i=0;i<NUM_OF_COINS;i++){
       var tempCoin=COIN_STACK[NUM_OF_COINS-i-1];
          alert(tempCoin.pos.showPosition()+"value: "+tempCoin.value+tempCoin.isFlipped+" "+tempCoin.pos.inStackPos);
    }*/
    var flashDiv=document.createElement('div');
    flashDiv.id="FlashDiv";
    document.getElementById("GameFrame").appendChild(flashDiv);
    var newDiv=document.createElement('div');
    newDiv.id="CoinPlane";
    document.getElementById("GameFrame").appendChild(newDiv);
    var player1Div=document.createElement('div');
    player1Div.id="Player1";
    document.getElementById("GameFrame").appendChild(player1Div);
    var player1Img=document.createElement('img');
    player1Img.id="imgPlayer1";
    player1Img.src=PLAYER_BUCKET_IMAGE;
    document.getElementById("Player1").appendChild(player1Img);
    var player2Div=document.createElement('div');
    player2Div.id="Player2";
    document.getElementById("GameFrame").appendChild(player2Div);
    var player2Img=document.createElement('img');
    player2Img.id="imgPlayer2";
    player2Img.src=PLAYER_BUCKET_IMAGE;
    document.getElementById("Player2").appendChild(player2Img);
    display();
    flashAlert();
    $(document).ready(function(){
        if(GAME_TYPE==="SINGLE_PLAYER"){
            gameLoop();
        }
    });
}