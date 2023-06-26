function main () {

const buttonOne = document.getElementById("button__1").addEventListener("click", buttonOneRating);
const buttonTwo = document.getElementById("button__2").addEventListener("click", buttonTwoRating);
const buttonThree = document.getElementById("button__3").addEventListener("click", buttonThreeRating);
const buttonFour = document.getElementById("button__4").addEventListener("click", buttonFourRating);
const buttonFive = document.getElementById("button__5").addEventListener("click", buttonFiveRating);

function buttonOneRating() {
    let value = 1;
    window.localStorage.setItem('value', JSON.stringify(value));
}
function buttonTwoRating() {
    window.localStorage.clear();
    let value = 2;
    window.localStorage.setItem('value', JSON.stringify(value));
    
}
function buttonThreeRating() {
    window.localStorage.clear();
    let value = 3;
    window.localStorage.setItem('value', JSON.stringify(value));
    
}
function buttonFourRating() {
    window.localStorage.clear();
    let value = 4;
    window.localStorage.setItem('value', JSON.stringify(value));
    
}
function buttonFiveRating() {
    window.localStorage.clear();
    let value = 5;
    window.localStorage.setItem('value', JSON.stringify(value));
    
}
}

main();