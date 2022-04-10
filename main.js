
let cards = ["♦","♥","♠","♣"]
let numbers = ["1","2","3","4","5","6","7","8","9","10","J","Q","K"]
let color = ["red","black"]

function displayCard() {
    let singleCard = cards[Math.floor(Math.random() * cards.length)];
    let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
    let singleColor = color[Math.floor(Math.random() * color.length)];
    let showNumber = `${singleNumber}`;
    let showSuit = `${singleCard}`;
    let showSuit2 = `${singleCard}`;
    let cardColor = `${singleColor}`;
    document.getElementById("showsuit").innerHTML = showSuit;
    document.getElementById("showsuit").style.color = cardColor;
    document.getElementById("shownumber").innerHTML = showNumber;
    document.getElementById("showsuit2").innerHTML = showSuit2;
    document.getElementById("showsuit2").style.color = cardColor;
}

window.onload = displayCard();
