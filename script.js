const buttonOne = document.getElementById("button__1");
const buttonTwo = document.getElementById("button__2");
const inputResult = document.getElementById("input__result");
const buttonContainer = document.getElementById("button__container");
//buttonContainer.addEventListener("click", iterateButtons())
buttonOne.addEventListener("click", addID);
buttonTwo.addEventListener("click", addID);
function addID() {
    this.id = "data";
    console.log(this.id);
}
function iterateButtons (){
    if (buttonOne.checked) {
        alert("Button 1 selected");
    }
    else if (buttonTwo.checked) {
        alert("Button 2 selected");
    }
    }
    /*for (let v = 0; v <= 4; v++) {
        if (buttonContainer.children[v].class = "test") {
            alert("This worked");
        }
     //   console.log(buttonContainer.children[v].classList);
    } */
// console.log(buttonOne.value, buttonTwo.value, buttonContainer.children);
// inputResult.innerHTML = buttonOne.value;
// Look into utilizing modules to run program through index.html first then importing to submit.html for functionality