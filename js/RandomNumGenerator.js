/* 
 * The function RandomNumberGenerator generates random numbers 25,50,75 or 100.
 * The function randomUnbaisedGenerator generates random unbaised coin stack.
 */
function randomNumberGenerator(){
    var prob=Math.random();
    var rand=Math.floor(prob * 4 + 1);
    switch(rand){
        case 1: return 25;
        case 2: return 50;
        case 3: return 75;
        case 4: return 100;
    }
}
function randomUnbaisedStackGenerator(){
    initDP();
    initRand();
    for(var i=0;i<NUM_OF_COINS_LEFT_IN_THE_GAME;i++){
        var tempRand=randomNumberGenerator();
        RANDOM_NUMBERS[i]=tempRand;
    }
    initExecutableArray(NUM_OF_COINS_LEFT_IN_THE_GAME-1);
    initSumArray();
    var maxValueTakenByPlayer1 = max(PlayTheGame(1, 1), PlayTheGame(1, 2));
    if (maxValueTakenByPlayer1 !== Math.floor(SUM_EXECUTABLE[NUM_OF_COINS_LEFT_IN_THE_GAME] / 2)) {
        randomUnbaisedStackGenerator();
    }else{
        printDP();
    }
}