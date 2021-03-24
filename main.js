/*************
 * DATA SETS *
 *************/
const firstNum = [];
const secondNum = [];
const operatorSelect = [];

/*******************
 * EVENT LISTENERS *
 *******************/

//numbers
const button1 = document.getElementById("one");
const button2 = document.getElementById("two");
const button3 = document.getElementById("three");
const button4 = document.getElementById("four");
const button5 = document.getElementById("five");
const button6 = document.getElementById("six");
const button7 = document.getElementById("seven");
const button8 = document.getElementById("eight");
const button9 = document.getElementById("nine");
const button0 = document.getElementById("zero");
const buttonDecimal = document.getElementById("decimal");

//operators
const buttonPlus = document.getElementById("plus");
const buttonMinus = document.getElementById("minus");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals-button");
const buttonClear = document.getElementById("clear");

/****************************
 * CLICK HANDLING FUNCTION  *
 ****************************/
//numbers
button1.addEventListener("click", button1Click);
button2.addEventListener("click", button2Click);
button3.addEventListener("click", button3Click);
button4.addEventListener("click", button4Click);
button5.addEventListener("click", button5Click);
button6.addEventListener("click", button6Click);
button7.addEventListener("click", button7Click);
button8.addEventListener("click", button8Click);
button9.addEventListener("click", button9Click);
button0.addEventListener("click", button0Click);
buttonDecimal.addEventListener("click", buttonDecimalClick);

//operators
buttonPlus.addEventListener("click", buttonPlusClick);
buttonMinus.addEventListener("click", buttonMinusClick);
buttonMultiply.addEventListener("click", buttonMultiplyClick);
buttonDivide.addEventListener("click", buttonDivideClick);
buttonEquals.addEventListener("click", buttonEqualsClick);
buttonClear.addEventListener("click", buttonClearClick);

/********************
 * HELPER FUNCTIONS *
 ********************/
//tests
function testClick() {
	console.log("Did this work?");
}

//number buttons
function button1Click() {
    if (operatorSelect.length === 0){
        firstNum.push(1);
    } else {
        secondNum.push(1)
    }
    console.log("FirstNum:", firstNum.join("")*1);
    console.log("SecondNum:", secondNum.join("")*1)
}
function button2Click() {
	console.log(2);
}
function button3Click() {
	console.log(3);
}
function button4Click() {
	console.log(4);
}
function button5Click() {
	console.log(5);
}
function button6Click() {
	console.log(6);
}
function button7Click() {
	console.log(7);
}
function button8Click() {
	console.log(8);
}
function button9Click() {
	console.log(9);
}
function button0Click() {
	console.log(0);
}
function buttonDecimalClick() {
	console.log(`.`);
}
//operator buttons
function buttonPlusClick() {
    operatorSelect[0] = `+` 
	console.log(operatorSelect);
}
function buttonMinusClick() {
	console.log(`-`);
}
function buttonMultiplyClick() {
	console.log(`*`);
}
function buttonDivideClick() {
	console.log(`/`);
}
function buttonEqualsClick() {
	console.log(`Will need to create function to calculate equation`);
}
function buttonClearClick() {
    firstNum.splice(0)
    secondNum.splice(0)
    operatorSelect.splice(0)
	console.log("FirstNum:",firstNum.join("")*1);
    console.log("Operator:",operatorSelect.join(""));
    console.log("SecondNum:",secondNum.join("")*1);
}
