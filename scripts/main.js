var cardArray = ["clovers", "diamonds", "hearts", "spades"];
var numArray = ["A", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

var imgPath = "images/";

var card = document.getElementById("card");
var cardNum = document.getElementById("cardNumber");
var suite = document.getElementById("suite");

    card.addEventListener("click", function(){
    	var num = Math.floor(Math.random() * Math.floor(numArray.length));
    	cardNum.innerHTML = numArray[num];

    	var randomCard = Math.floor(Math.random() * Math.floor(cardArray.length));
    	suite.src = imgPath + cardArray[randomCard] + ".svg";
    });