/*************
 * DATA SETS *
 *************/
const firstNum = [];
const secondNum = [];
const operatorSelect = [];
let solution = 0;
let nightModeSet = false;

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
// const buttonPlus = document.getElementById("plus");
// const buttonMinus = document.getElementById("minus");
// const buttonMultiply = document.getElementById("multiply");
// const buttonDivide = document.getElementById("divide");
// const buttonEquals = document.getElementById("equals-button");
// const buttonClear = document.getElementById("clear");
const operators = document.querySelectorAll("button")

//other
const screen = document.getElementById("screen");
const nightMode = document.getElementById("nightMode");

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
// buttonPlus.addEventListener("click", buttonPlusClick);
// buttonMinus.addEventListener("click", buttonMinusClick);
// buttonMultiply.addEventListener("click", buttonMultiplyClick);
// buttonDivide.addEventListener("click", buttonDivideClick);
// buttonEquals.addEventListener("click", buttonEqualsClick);
// buttonClear.addEventListener("click", buttonClearClick);
operators.addEventListener('click', operatorClick); 

nightMode.addEventListener("click", toggleNightMode);

/********************
 * HELPER FUNCTIONS *
 ********************/
//tests
function testClick() {
	console.log("Did this work?");
}
function resetData() {
	firstNum.splice(0);
	secondNum.splice(0);
	operatorSelect.splice(0);
}

function updateScreen() {
	if (operatorSelect.length === 0) {
		screen.innerText = firstNum.join("") * 1;
	} else {
		screen.innerText =
			firstNum.join("") + operatorSelect + secondNum.join("");
	}
}

function numClick(){

}

function operatorClick(){
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
	} else {
		for (const operator of operators){
			operatorSelect[0] = document.operator.innerText;
			updateScreen()
		}
	}
}
//number buttons
function button1Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(1);
	} else {
		secondNum.push(1);
	}
	updateScreen();
}
function button2Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(2);
	} else {
		secondNum.push(2);
	}
	updateScreen();
}
function button3Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(3);
	} else {
		secondNum.push(3);
	}
	updateScreen();
}
function button4Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(4);
	} else {
		secondNum.push(4);
	}
	updateScreen();
}
function button5Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(5);
	} else {
		secondNum.push(5);
	}
	updateScreen();
}
function button6Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(6);
	} else {
		secondNum.push(6);
	}
	updateScreen();
}
function button7Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(7);
	} else {
		secondNum.push(7);
	}
	updateScreen();
}
function button8Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(8);
	} else {
		secondNum.push(8);
	}
	updateScreen();
}
function button9Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(9);
	} else {
		secondNum.push(9);
	}
	updateScreen();
}
function button0Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(0);
	} else {
		secondNum.push(0);
	}
	updateScreen();
}
function buttonDecimalClick() {
	const num1decimalCheck = firstNum.includes(".");
	const num2decimalCheck = secondNum.includes(".");
	//Checking firstNum if there is a decimal
	if (operatorSelect.length === 0) {
		//If no decimal, add decimal
		if (num1decimalCheck === false) {
			firstNum.push(`.`);
			
		} 
		//If YES decimal, display what is already there
		updateScreen()
	//Checking secondNum if there is a decimal
	} else {
		//If no decimal, add decimal
		if (num2decimalCheck === false) {
			secondNum.push(`.`);
		} 
		//If YES decimal, display what is already there
		updateScreen()
	}
}
//operator buttons
function buttonPlusClick() {
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
	}
	operatorSelect[0] = `+`;
	screen.innerText = firstNum.join("") * 1 + "+";
	console.log(operatorSelect);
}
function buttonMinusClick() {
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
	}
	operatorSelect[0] = `-`;
	screen.innerText = firstNum.join("") * 1 + "-";
	console.log(operatorSelect);
}
function buttonMultiplyClick() {
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
	}
	operatorSelect[0] = `x`;
	screen.innerText = firstNum.join("") * 1 + "x";
}
function buttonDivideClick() {
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
	}
	operatorSelect[0] = `÷`;
	screen.innerText = firstNum.join("") * 1 + "÷";
}
function buttonEqualsClick() {
	if (operatorSelect.length !== 0) {
		if (operatorSelect[0] === "+") {
			solution = firstNum.join("") * 1 + secondNum.join("") * 1;
		}
		if (operatorSelect[0] === "-") {
			solution = firstNum.join("") * 1 - secondNum.join("") * 1;
		}
		if (operatorSelect[0] === "x") {
			solution = firstNum.join("") * 1 * secondNum.join("") * 1;
		}
		if (operatorSelect[0] === "÷") {
			solution = ((firstNum.join("") * 1) / secondNum.join("")) * 1;
		}
	} else {
		solution = firstNum.join("") * 1;
	}

	screen.innerText = parseFloat(solution.toFixed(4));
	resetData();
	firstNum[0] = parseFloat(solution.toFixed(4));
	console.log(solution);
}
function buttonClearClick() {
	resetData();
	screen.innerText = 0;
}

function toggleNightMode() {
	console.log("NIGHT MODE CLICKED");
	if (nightModeSet === false) {
		nightModeSet = true;

		document.getElementById("container").style.backgroundColor = "purple";
	} else {
		nightModeSet = false;
		document.getElementById("container").style.backgroundColor = "#293241";
	}
}
