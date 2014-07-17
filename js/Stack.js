/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
headPointerOfStack=0;
function pushInStack(tempCoin){
    if(headPointerOfStack<NUM_OF_COINS){
        COIN_STACK[headPointerOfStack]=tempCoin;
        headPointerOfStack++;
    }
}
function popFromStack(){
    if(headPointerOfStack>0){
      var temp=COIN_STACK[headPointerOfStack-1];
      headPointerOfStack--;
      NUM_OF_COINS_LEFT_IN_THE_GAME=headPointerOfStack;
      return temp;
    }
}
function getFromStack(){
    if(headPointerOfStack>0)
       return COIN_STACK[headPointerOfStack-1];
}
function stackIsEmpty(){
    if(headPointerOfStack===0)
        return true;
    return false;
}

