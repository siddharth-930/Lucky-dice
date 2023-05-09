var randomNumber1=Math.floor(((Math.random())*6)+1);
var change1="./images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",change1);

var randomNumber2=Math.floor(((Math.random())*6)+1);
var change2="./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",change2);



if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="player 1 won";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="player 2 won";
}else{
    document.querySelector("h1").innerHTML="its a draw";
}



