/* 
 * Mainly used for handling the keyboard controls.
 * Press up to shift the coins up and register the last coin to perform various calculations. 
 */
var multipleKeyPressMap={
    38: false, // Up
    39: false, // Right
    40: false, // Down
    37: false, // Left
    75: false, // Vim up
    76: false, // Vim right
    74: false, // Vim down
    72: false, // Vim left
    87: false, // W
    68: false, // D
    83: false, // S
    65: false  // A
};
function multipleKeyPressed(event){
    if (event.keyCode in multipleKeyPressMap) {
        multipleKeyPressMap[event.keyCode] = true;
    }
    var numOfTrues=0;
    var key=null;
    while(key in multipleKeyPressMap){
        if(multipleKeyPressMap[key])
            numOfTrues++;
    }
    if(numOfTrues>1){
        return true;
    }
    else{
        return false;
    }
}
function KeyPressed(event){
    var map = {
    38: 0, // Up
    39: 1, // Right
    40: 2, // Down
    37: 3, // Left
    75: 0, // Vim up
    76: 1, // Vim right
    74: 2, // Vim down
    72: 3, // Vim left
    87: 0, // W
    68: 1, // D
    83: 2, // S
    65: 3  // A
  };
    this.modifiers = event.altKey || event.ctrlKey || event.metaKey ||event.shiftKey;
    this.mapped=map[event.which];
    this.isValidMove=function(){
        if (!this.modifiers) {
           if (this.mapped>=0 && this.mapped<=3) {
               return true;
           }
       }
       return false;
    };
}
KeyPressed.prototype.takeAction=function(){
   //Determin if coins can be taken out of the stack.
   if(POSITION_OF_LAST_COIN_SELECTED<0){
       POSITION_OF_LAST_COIN_SELECTED=0;
   }
    if(this.mapped===0||this.mapped===2){
       if(this.mapped===0){
           //console.log("Pressed Up button");
           //register last pos and don't call assign coins. Also make sure that the player can take only that many coins.
           POSITION_OF_LAST_COIN_SELECTED--;
           var numberCoinsTaken=NUM_OF_COINS_LEFT_IN_THE_GAME-POSITION_OF_LAST_COIN_SELECTED;
           //console.log("numCoinsTaken= "+numberCoinsTaken+" by "+getCurPlayer().name);
            if(getCurPlayer().maxCoinLimit>=numberCoinsTaken&&POSITION_OF_LAST_COIN_SELECTED>=0){
                COIN_SELECTED=true;
                shiftUp(POSITION_OF_LAST_COIN_SELECTED,DEFAULT_SHIFT_UP);
            }else{
                //console.log("did nothing when up was pressed");
                POSITION_OF_LAST_COIN_SELECTED++;
            }
       }else{
           //shift the coins down and do nothing. Make sure that only last pos change. Don't assign coins to player.
           //console.log("Pressed down key");
           POSITION_OF_LAST_COIN_SELECTED++;
           var numberCoinsTaken=NUM_OF_COINS_LEFT_IN_THE_GAME-POSITION_OF_LAST_COIN_SELECTED;
           //console.log("numberCoinsTaken= "+numberCoinsTaken+" by "+getCurPlayer().name);
            if(numberCoinsTaken>0){
                //console.log("Got number of Coins Taken");
                COIN_SELECTED=true;
                shiftUp(POSITION_OF_LAST_COIN_SELECTED-1,-1*DEFAULT_SHIFT_UP);
            }else if(numberCoinsTaken===0){
                //console.log("Got number of Coins Taken");
                shiftUp(POSITION_OF_LAST_COIN_SELECTED-1,-1*DEFAULT_SHIFT_UP);
                COIN_SELECTED=true;
            }
            else{
                //console.log("Number of coins taken is negative");
                POSITION_OF_LAST_COIN_SELECTED--;
                COIN_SELECTED=false;
            } 
       }
   }else{
       //check if the user can take the coins or not.
       if(this.mapped===3 && getCurPlayer().name==="Player1" && COIN_SELECTED){
           //The selected coins goes to player1
            //console.log("Player1 is about acquire the coins");
            assignCoinsToCurrPlayer(POSITION_OF_LAST_COIN_SELECTED);
            updateScoreOnDisplay();
            initPostionOfLastCoin();
            COIN_SELECTED=false;
            if(GAME_TYPE==="SINGLE_PLAYER")
                gameLoop();
       }
       else if(this.mapped===1 && getCurPlayer().name==="Player2" && COIN_SELECTED){
           //The selected coins goes to player2
           //console.log("Player2 is about to acquire the coins");
           assignCoinsToCurrPlayer(POSITION_OF_LAST_COIN_SELECTED);
           updateScoreOnDisplay();
           initPostionOfLastCoin();
           COIN_SELECTED=false;
       }
       else{
           //Do nothing wrong combination of key pressed.
       }
   }     
};
$(document).ready(function(){
        $(document).keyup(function(event){
            if (event.keyCode in multipleKeyPressMap) {
              multipleKeyPressMap[event.which] = false;
            }
        });
        $(document).keydown(function(event){
             if(GAME_TYPE==="TWO_PLAYER"||CURR_TURN_PLAYER_ID==="Player1"){
                if(!multipleKeyPressed(event)){
                  console.log("isWorking");
                  var keyPressed=new KeyPressed(event);
                  if(keyPressed.isValidMove()){
                  keyPressed.takeAction();
                  }else{
                    //Do nothing;
                  }
                }
             }
         });
});


