/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var numberOfFrames=0;
var FPS=100;
function repeatOften() {
  $("<div class='loader' />").appendTo("#loadingBar");
  throtle();
  numberOfFrames++;
  var limit=$("#loadingBar").css("width");
  var width=$(".loader").css("width");
  var tempStr=limit.substring(0,limit.length-2);
  var tempStr1=width.substring(0,width.length-2);
 // alert(limit);
  var counter=Number(tempStr)/Number(tempStr1);
  //alert(counter);
   if(numberOfFrames<counter){
    globalID = requestAnimationFrame(repeatOften);
  }else{
      window.location.href="GameFrame.html";
  }
}
function throtle(){
    var j=new Date().getTime();
    var i=new Date().getTime();
    while((i-j)<FPS){
        i=new Date().getTime();
    }
}
function LoadGame(){
    setFrame("#GameFrameLoadPage");
    repeatOften();
}
function setRules(frameName){
	var div = document.getElementById('GameFrame');
	div.innerHTML = "<img src='images/RulesPage.jpg'/>";
}      
function setAbout(frameName){
	var div = document.getElementById('GameFrame');
	div.innerHTML = "<img src='images/AboutPage.jpg'/>";
}  
function setFrame(frameName){
    var heightOfWindow=Number($(window).height());
    var widthOfWindow=Number($(window).width());
    var heightOfFrame=Number($(frameName).height());
    var widthOfFrame=Number($(frameName).width());
	//$('#loadingBar').css({position:'absolute',top:((heightOfWindow-heightOfFrame)/2+heightOfFrame/2+10),left:((widthOfWindow-widthOfFrame)/2-100)});
    if(widthOfWindow>=widthOfFrame && heightOfWindow>=heightOfFrame)
		$(frameName).css({position:'absolute',top:(heightOfWindow-heightOfFrame)/2,left:(widthOfWindow-widthOfFrame)/2});
}               
        