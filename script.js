const buttonOne = document.getElementById("button__1");
const buttonTwo = document.getElementById("button__2");
const inputResult = document.getElementById("input__result");
console.log(buttonOne.value, buttonTwo.value);
inputResult.innerHTML = buttonOne.value;
// Look into utilizing modules to run program through index.html first then importing to submit.html for functionality