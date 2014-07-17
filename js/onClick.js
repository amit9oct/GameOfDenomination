/* 
 * Has methods which change on click.
 * 
 */
var clickedOnId="";
function allowDrop(event) {
    event.preventDefault();
}
function drag(event) {
    event.originalEvent.dataTransfer.setData("text", event.target.id);
}
function drop(event,pos) {
    $(".selected").hide();
    event.preventDefault();
}
function prepareScreen(){
     $(document).click(function(e){
        console.log("1 clicked on:"+e.target.id);
        clickedOnId=e.target.id;
        if(clickedOnId.substr(0,7)==="imgCoin"){
            POSITION_OF_LAST_COIN_SELECTED=Number(clickedOnId.substr(7,clickedOnId.lenght));
            console.log("2 Got pos="+POSITION_OF_LAST_COIN_SELECTED);
            shiftAllUp(POSITION_OF_LAST_COIN_SELECTED,DEFAULT_SHIFT_UP);
            console.log("shifted up the coins");
            for(var i=NUM_OF_COINS_LEFT_IN_THE_GAME-1;i>=POSITION_OF_LAST_COIN_SELECTED;i--){
               var coinName="Coin"+COIN_STACK[i].pos.inStackPos.toString();
               var imgCoinName="img"+coinName;
               $("#"+imgCoinName).attr('class','selected');
            }
            hideSpan(POSITION_OF_LAST_COIN_SELECTED);
            console.log("5 spanHided");
            $(".selected").attr('draggable','true');
            console.log("6 set .selected to draggable");
            $(".selected").on(
                    'dragstart',
                     function(event){
                         console.log("7 dragging started");
                         drag(event);
                     }
            ); 
            $("#Player1").on(
                    'dragover',
                     function(event){
                         console.log("8 dragover started");
                         allowDrop(event);
                     }
            );
            $("#Player1").on(
                    'dragenter',
                     function(){
                     }
             ); 
            $("#Playeer1").on(
                    'dragleave',
                     function(){
                         console.log("9 dragleft");
                         $(".selected").show();
                     }
             ); 
            $("#Player1").on(
                    'drop',
                     function(event){
                         console.log("9 drop started");
                         drop(event);
                         //assignCoinsToCurrPlayer();
                          var pos=POSITION_OF_LAST_COIN_SELECTED;
                          console.log("10 check 2 pos curr pos="+POSITION_OF_LAST_COIN_SELECTED);
                          console.log("11 numOfCoinsLeft= "+NUM_OF_COINS_LEFT_IN_THE_GAME+" currentPlayerName: "+getCurPlayer().name+" currentPlayerMaxCoinLimit: "+getCurPlayer().maxCoinLimit);
                          var numOfCoinsAttemptedToBeTaken=NUM_OF_COINS_LEFT_IN_THE_GAME-pos;
                          console.log("12 pos= "+pos+" POS= "+POSITION_OF_LAST_COIN_SELECTED);
                          if(numOfCoinsAttemptedToBeTaken<=getCurPlayer().maxCoinLimit){
                          var i=NUM_OF_COINS_LEFT_IN_THE_GAME-1;
                          console.log("13 i= "+i+"NUM_OF_COINS_LEFT_IN_THE_GAME= "+NUM_OF_COINS_LEFT_IN_THE_GAME+" pos= "+pos);
                          for(;i>=pos;i--){
                                var tempCoin=popFromStack();
                                getCurPlayer().pushCoin(tempCoin);
                          } 
                          console.log("14 Number of coins taken by "+getCurPlayer().name+" is "+getCurPlayer().coinStackHeadPointer);
                          console.log("15 Score of "+getCurPlayer().name+" is "+getCurPlayer().getScore());
                          //alert("Score of "+getCurPlayer().name+" is "+getCurPlayer().getScore());
                          console.log("16 NumberOfCoinsLeftInGame= "+NUM_OF_COINS_LEFT_IN_THE_GAME);
                          $(".selected").remove();
                          setMaxCoinLimit(numOfCoinsAttemptedToBeTaken);
                          console.log("17 MaxCoinLimit set to "+getCurPlayer().maxCoinLimit);
                          switchTurn();
                          }else{
                          console.log("13 More coins were taken");
                          alert("You can't take more than "+getCurPlayer().maxCoinLimit);
                          $(".selected").show();
                          }
                          console.log("stopping porpagation of event");
                          event.stopPropagation();
                        }
            );
            /*$("#"+getNextTurnPlayer().name).on(
                   'dragover',
                    function(event){
                        console.log("*** wrong drag was tried");
                    }
            );
            $("#"+getNextTurnPlayer().name).on(
                    'dragenter',
                     function(event){
                         console.log("*** wrong drag was tried");
                     }
             );
            $("#"+getNextTurnPlayer().name).on(
                    'dragleave',
                     function(event){
                         console.log("*** wrong drag was tried");
                     }
             ); 
            $("#"+getNextTurnPlayer().name).on(
                    'drop',
                     function(event){
                         console.log("*** wrong drag was tried");
                     }
             );*/
        }
     });
  }
