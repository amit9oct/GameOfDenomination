/* 
 * This file contains the details of game parameters.
 */
var COINS_CONSUMED=0;
var _25_COIN = 'images/25.png';
var _50_COIN = 'images/50.png';
var _75_COIN = 'images/75.png';
var _100_COIN = 'images/101.png';
var HEIGHT_OF_COIN=25; //In pixels
var DIAM_OF_COIN=76; //In pixels
var NUM_OF_COINS=5; //By default set to 5
var NUM_OF_COINS_LEFT_IN_THE_GAME=NUM_OF_COINS;//In begining number of coins left is equalt to total number of coins
var MAX_RANDOMNESS=1000; //Used for generating 1000 random numbers
var RANDOM_NUMBERS=new Array();// Array containing random numbers
var COIN_STACK=new Array();//Implemented as stack
var SILVER_COIN_FRONT_VIEW="images/FrontViewSilverCoin.gif";//Location of image
var SILVER_COIN_SIDE_VIEW="images/SideViewSilverCoin.gif";//Location of image
var LEVEL="LEVEL1";// Can take Values 'LEVEL1','LEVEL2' and 'LEVEL3'
var GAME_TYPE="SINGLE_PLAYER";// Can take Values 'SINGLE' or 'TWO_PLAYER'
var SUM_RAND=new Array();// Sum of randomNumbers till ith
var NUM_OF_DENOMINATIONS=4;// By default set to 4 can be changed depending on the difficulty of the game play.
var DP=new Array();//For performing DP operation
var DEFAULT_SHIFT_UP=20;//Values in pixels
var TEXT_IMAGE_LEVELER=3;//Values in pixels
var DEFAULT_MARGIN=30; //Values in pixels
var PLAYER_IMG_WIDTH=60; //Values in pixels
var PLAYER_BUCKET_IMAGE="images/Bucket.gif"; // have the image for the buiucket
var CURR_TURN_PLAYER_ID="Player1"; //by default set to player 1
var POSITION_OF_LAST_COIN_SELECTED=NUM_OF_COINS_LEFT_IN_THE_GAME; //Initialized by the Number of coins in the stack by default.
var PLAYER_SCORE_CARD_MARGIN=30; //Values in pixels.
var SCORE_CARD_PLAYER1=null; //Contains the ScoreCard of player1
var SCORE_CARD_PLAYER2=null; //Contains the ScoreCard of Player2
var COIN_SELECTED=false;//Maintains if coins are selected or not
var EXECUTABLE_ARRAY=new Array();// Maintains the current stack.
var SUM_EXECUTABLE=new Array(); //Stores cumulative sum of EXECUTABLE_ARRAY.
var DP_BACKTRACK=new Array();
(function(){
    
});