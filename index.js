var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSOurce = "Images/" +randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSOurce);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var randomImageSOurce2 = "Images/dice" +randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSOurce2);



if(randomNumber1>randomNumber2)
{
    document.querySelector("h2").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
    document.querySelector("h2").innerHTML="Player 2 Wins🚩";
}
else
{
    document.querySelector("h2").innerHTML="Draw !!😥😥";
}
