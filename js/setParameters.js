/* 
 * This file sets parameters. These parameters are for the game.
 * They include level and Number of players.
 */
function setParameters(){
    LEVEL=$('input[name=level]:checked', '#level').val();
    GAME_TYPE=$('input[name=playerOption]:checked', '#level').val();
    var numOfCoins=$('input[name=numOfCoins]:checked','#level').val();
    if(numOfCoins==="FIRST"){
        NUM_OF_COINS=5;
    }
    else if(numOfCoins==="SECOND"){
        NUM_OF_COINS=10;
    }
    else
        NUM_OF_COINS=20;
    NUM_OF_COINS_LEFT_IN_THE_GAME=NUM_OF_COINS;
    if(GAME_TYPE==="SINGLE_PLAYER"){
       $("#level").html(
	   "<div id='Continue'>"+
               "Do you want to make the first move?<br>"+
               "<input type='radio' checked='checked' name='selectFirstPlayerOpn' value='Player1'/>yes &nbsp;"+
               "<input type='radio' name='selectFirstPlayerOpn' value='Player2'/>no<br>"+
               "<button id='ContinueBtn' onclick='startGame()'><img src='images/ContinueBtn.jpg'/></button>"+
		"</div>");
       $("#Continue").focus();
    }
    else{
       startGame();
    }
}

