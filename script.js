const Input = document.getElementById("input");
Input.textContent = "4";
const Body = document.getElementById("body");
Body.style.backgroundColor = "white";

var Rating = {
    buttonOne: document.getElementById("button__1"),
    buttonOneValue: 1,
    buttonTwo: document.getElementById("button__2"),
    buttonTwoValue: 2,
    buttonThree: document.getElementById("button__3"),
    buttonThreeValue: 3,
    buttonFour: document.getElementById("button__4"),
    buttonFourValue: 4,
    buttonFive: document.getElementById("button__5"),
    buttonFiveValue: 5
}
function rating (buttonOne, buttonOneValue, buttonTwo, buttonTwoValue, buttonThree, buttonThreeValue, buttonFour, buttonFourValue, buttonFive, buttonFiveValue) {
    this.buttonOne = buttonOne;
    this.buttonOneValue = buttonOneValue;
}
const formRating = new rating("buttonOne", 1);
console.log(Rating);
Rating.buttonOne.addEventListener("click", test);
function test() {
    console.log("Works");
}
   
  /*  buttonTwo: document.getElementById("button__2"),
    buttonThree: document.getElementById("button__3"),
    buttonFour: document.getElementById("button__4"),
    buttonFive: document.getElementById("button__5"),
}
*/



/*const buttonOne = document.getElementById("button__1");
const buttonTwo = document.getElementById("button__2");
const buttonThree = document.getElementById("button__3");
const buttonFour = document.getElementById("button__4");
const buttonFive = document.getElementById("button__5");
const inputResult = document.getElementById("input__result");
const buttonContainer = document.getElementById("button__container");
const Submit = document.getElementById("submit");
//buttonContainer.addEventListener("click", iterateButtons())
buttonOne.addEventListener("click", addID);
buttonTwo.addEventListener("click", addID);
console.log(buttonOne.id, buttonTwo.id, buttonThree.id, buttonFour.id, buttonFive.id);

Submit.addEventListener("click", iterateButtons);


function addID() {
    this.id = "data";
    console.log(this.id);
    console.log(buttonOne, buttonOne.id, buttonTwo.id, buttonThree.id, buttonFour.id, buttonFive.id);
}

function submit() {
//const test = getElementById("data")
for (let v = 0; v <= 4; v++) {
    if (buttonContainer.children[v].id = "data") {
        alert("This worked");
    }
}
}

function iterateButtons (){
    if (buttonOne.id = "data") {
        alert("Button 1 selected");
    }
        else {
            alert ("Another button was selected");
        }
    }


  /*  if (buttonTwo.id = "data") {
        alert("Button 2 selected");
    }
    } */
    /*for (let v = 0; v <= 4; v++) {
        if (buttonContainer.children[v].class = "test") {
            alert("This worked");
        }
     //   console.log(buttonContainer.children[v].classList);
    } */
// console.log(buttonOne.value, buttonTwo.value, buttonContainer.children);
// inputResult.innerHTML = buttonOne.value;
// Look into utilizing modules to run program through index.html first then importing to submit.html for functionality