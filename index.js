var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);
var myImages = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

document.querySelector(".img1").setAttribute("src","images/"+myImages[randomNumber1-1])
document.querySelector(".img2").setAttribute("src","images/"+myImages[randomNumber2-1])


// change the header based on the vakue of number 1 and 2
var myHeader = document.querySelector(".container h1")
if (randomNumber1 > randomNumber2){
    myHeader.textContent = "🚩 Player 1 wins!"
} else if (randomNumber2 > randomNumber1){
    myHeader.textContent = "Player 2 wins! 🚩"
}else{
    myHeader.textContent = "draw!"
}