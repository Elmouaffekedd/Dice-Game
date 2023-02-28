var randomNumber1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNumber2);

var randomDiceImage1 = "Images/dice"+randomNumber1+".png";
var randomDiceImage2 = "Images/dice"+randomNumber2+".png";

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomDiceImage1);
image2.setAttribute("src", randomDiceImage2);



function randomDice1(randomNumber1){
    if(randomNumber1 === 1){
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice1.png");
    }else if(randomNumber1 === 2){
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice2.png");
    }else if(randomNumber1 === 3){
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice3.png");
    }else if(randomNumber1 === 4){
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice4.png");
    }else if(randomNumber1 === 5){
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice5.png");
    }else{
        return document.getElementsByTagName('img')[0].setAttribute("src", "images/dice6.png");
    }
}

function randomDice2(randomNumber2){
    if(randomNumber2 === 1){
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice1.png");
    }else if(randomNumber2 === 2){
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice2.png");
    }else if(randomNumber2 === 3){
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice3.png");
    }else if(randomNumber2 === 4){
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice4.png");
    }else if(randomNumber2 === 5){
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice5.png");
    }else{
        return document.getElementsByTagName('img')[1].setAttribute("src", "images/dice6.png");
    }
}

function theWinner(randomNumber1, randomNumber2){
    if (randomNumber1 > randomNumber2){
        return document.querySelector("h1").innerHTML ="Player 1 wins";

    }else if (randomNumber1 < randomNumber2){
        return document.querySelector("h1").innerHTML = "Player 2 wins";
    }else{
        return document.querySelector("h1").innerHTML = "Draw!";
    }


}


randomDice1(randomNumber1);
randomDice2(randomNumber2);
theWinner(randomNumber1, randomNumber2);


document.body.addEventListener("click", function (){
    location.reload();
});
