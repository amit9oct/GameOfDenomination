/* 
 * Contains the function PlayTheGame, which is main brain and unbeatable algorithm.
 * The function PlayTheGame returns the maximum amount that first player can collect if he/she plays optimally.
 */
//Works fine
function initExecutableArray(pos){
    EXECUTABLE_ARRAY[0]=0;
    var j=1;
    for(var i=pos+1;i>=1;i--){
        EXECUTABLE_ARRAY[j]=RANDOM_NUMBERS[NUM_OF_COINS-i];
        j++;
    }
    for(var i=0;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        //console.log(EXECUTABLE_ARRAY[i]);
    }
}
//Works fine
function initSumArray(){
    SUM_EXECUTABLE[0]=EXECUTABLE_ARRAY[0]=0;
    SUM_EXECUTABLE[1]=EXECUTABLE_ARRAY[1];
    for(var j=2;j<=NUM_OF_COINS_LEFT_IN_THE_GAME;j++){
        SUM_EXECUTABLE[j]=SUM_EXECUTABLE[j-1]+EXECUTABLE_ARRAY[j];
    }
    //console.log("sum of above array");
    for(var i=0;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        //console.log(SUM_EXECUTABLE[i]);
    }
}
function initDPBackTrack(){
    for(var i=0;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        DP_BACKTRACK[i]=0;
    }
}
function DPBackTrack(pos){
    initDPBackTrack();
    //console.log("Backtracking");
    var maxima=DP[pos*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+1];
    var maximaIndex=1;
    var maxAffordability=getCurPlayer().maxCoinLimit;
    for(var j=2;j<=maxAffordability;j++){
       if(DP[pos*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+j]>maxima){
           maxima=DP[pos*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+j];
           maximaIndex=j;
        }
            DP_BACKTRACK[0]=maximaIndex;
        }
        //console.log(DP_BACKTRACK[0]);
}
function Algo(){
    var prob=Math.random();
    var rand=Math.floor(prob * 100 + 1);
    if(LEVEL==="LEVEL1"){
        if(rand<=50){
            return useAlgo();
        }else{
            return dontUseAlgo();
        }
    }else if(LEVEL==="LEVEL2"){
        if(rand<=70){
            return useAlgo();
        }else{
            return dontUseAlgo();
        }
    }else{
            return useAlgo();
    }
}
function dontUseAlgo(){
    var prob=Math.random();
    var rand=Math.floor(prob * getCurPlayer().maxCoinLimit + 1);
    return rand;
}
function useAlgo(){
    //console.log("KeyBoard Switched off");
    initExecutableArray(NUM_OF_COINS_LEFT_IN_THE_GAME-1);
    initDP();
    initSumArray();
    PreProcessDPTable();
    CompleteTheTable();
    printDP();
    DPBackTrack(1);
    if(DP_BACKTRACK[0]>NUM_OF_COINS_LEFT_IN_THE_GAME)
        DP_BACKTRACK[0]=POSITION_OF_LAST_COIN_SELECTED;
    return DP_BACKTRACK[0];
}
//Functions which are not used as a part of the game
function max(a,b) {
    if(a>b)
        return a;
    else
        return b;
}
//Call sum() only after you call initSumRand()
function sum(i,j){
	if(i<=j&&j<=NUM_OF_COINS_LEFT_IN_THE_GAME-1)
      return (SUM_RAND[j]-SUM_RAND[i]+RANDOM_NUMBERS[i]);
    else
	  return 0;
}
//Initializes the random number generator array
function initRand(){
    for(var i=0;i<NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        RANDOM_NUMBERS[i]=0;
    }
}
//Initializes the DP table
function initDP(){
    for (var i = 0; i <(NUM_OF_COINS+1)*(NUM_OF_COINS+1); i++)
        DP[i] = 0;
}
function sumArray(i,j){
    if(i<=j&&j<=NUM_OF_COINS_LEFT_IN_THE_GAME)
         return (SUM_EXECUTABLE[j]-SUM_EXECUTABLE[i]+EXECUTABLE_ARRAY[i]);
    else
	 return 0;
}
//Stores the sum of stack of coins from the top.
function initSumRand(){
    SUM_RAND[0]=RANDOM_NUMBERS[0];
    for (var i = 1; i < NUM_OF_COINS_LEFT_IN_THE_GAME; i++) {
        SUM_RAND[i] = SUM_RAND[i - 1] + RANDOM_NUMBERS[i];
    }
}
function CompleteTheTable(){
    for(var i=1;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        for(var j=1;j<=NUM_OF_COINS_LEFT_IN_THE_GAME;j++){
            PlayTheGame(i,j);
        }
    }
}
function PreProcessDPTable(){
    for(var i=1;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        for(var j=1;j<=NUM_OF_COINS_LEFT_IN_THE_GAME;j++){
            if((i+j)>NUM_OF_COINS_LEFT_IN_THE_GAME)
              DP[i*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+j]=sumArray(i,NUM_OF_COINS_LEFT_IN_THE_GAME);
        }
    }
}
//Main AI , the brain
function PlayTheGame(start,maxTake){
    if(DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake]===0){
     if(start+maxTake>(NUM_OF_COINS_LEFT_IN_THE_GAME)||start===(NUM_OF_COINS_LEFT_IN_THE_GAME)){
        if(start===NUM_OF_COINS_LEFT_IN_THE_GAME&&maxTake<NUM_OF_COINS_LEFT_IN_THE_GAME)
            DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake]=sumArray(start,NUM_OF_COINS_LEFT_IN_THE_GAME);
            return sumArray(start,NUM_OF_COINS_LEFT_IN_THE_GAME);
        }
        else if(maxTake===1){
            DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake]=sumArray(start,NUM_OF_COINS_LEFT_IN_THE_GAME)-max(PlayTheGame(start+1,1),PlayTheGame(start+1,2));
            return DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake];
        }
        else{
            DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake]=sumArray(start,NUM_OF_COINS_LEFT_IN_THE_GAME)-max(max(sumArray(start+1,NUM_OF_COINS_LEFT_IN_THE_GAME)-PlayTheGame(start+1,maxTake-1),PlayTheGame(start+maxTake,2*maxTake-1)),PlayTheGame(start+maxTake,2*maxTake));
            return DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake];
        }
    }else if(DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake]!== undefined && (start<=NUM_OF_COINS_LEFT_IN_THE_GAME && maxTake<=NUM_OF_COINS_LEFT_IN_THE_GAME))
        return DP[start*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+maxTake];
    else if(start+maxTake>(NUM_OF_COINS_LEFT_IN_THE_GAME)||start===(NUM_OF_COINS_LEFT_IN_THE_GAME)){
        return sumArray(start,NUM_OF_COINS_LEFT_IN_THE_GAME);
    }
}
function printDP(){
    for(var i=1;i<=NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        var str="";
        for(var j=1;j<=NUM_OF_COINS_LEFT_IN_THE_GAME;j++){
            str=str+DP[i*(NUM_OF_COINS_LEFT_IN_THE_GAME+1)+j]+" ";
        }
        //console.log(str);
    } 
}