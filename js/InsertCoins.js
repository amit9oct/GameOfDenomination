/* 
 * Add coins to the stack which used for displaying and other stuff.
 * The first Random Number goes to the bottom of the stack.
 * 
 */
function getFreeLocation(inStackPos){
    var heightOfGameFrame=Number($("#GameFrame").height());
    var widthOfGameFrame=Number($("#GameFrame").width());
    var leftPos=(widthOfGameFrame-DIAM_OF_COIN)/2;
    var topPos=heightOfGameFrame-HEIGHT_OF_COIN*(inStackPos+1);
    var pos=new PositionOfCoin(inStackPos,leftPos,topPos);
    return pos;
}
function InsertCoins(){
    for(var i=0;i<NUM_OF_COINS;i++){
        var tempPos=getFreeLocation(i);
        var tempCoin=new Coins(RANDOM_NUMBERS[NUM_OF_COINS-i-1],tempPos);
        pushInStack(tempCoin);
    }
}
function InsertCoinsAfterTheGameHasBegan(){
    
}