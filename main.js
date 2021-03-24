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
const numbers = document.querySelectorAll(".numbers");
const buttonDecimal = document.getElementById("decimal");

//operators
const buttonEquals = document.getElementById("equals-button");
const buttonClear = document.getElementById("clear");
const operators = document.querySelectorAll(".operators");

//other
const screen = document.getElementById("screen");
const nightMode = document.getElementById("nightMode");

/****************************
 * CLICK HANDLING FUNCTION  *
 ****************************/
//numbers
for (number of numbers) {
	number.addEventListener("click", numClick);
}
buttonDecimal.addEventListener("click", buttonDecimalClick);

//operators
buttonEquals.addEventListener("click", buttonEqualsClick);
buttonClear.addEventListener("click", buttonClearClick);
for (operator of operators) {
	operator.addEventListener("click", operatorClick);
}

nightMode.addEventListener("click", toggleNightMode);

/********************
 * HELPER FUNCTIONS *
 ********************/
//tests
function resetData() {
	firstNum.splice(0);
	secondNum.splice(0);
	operatorSelect.splice(0);
}

function updateScreen() {
	if (operatorSelect.length === 0) {
		screen.innerText = firstNum.join("");
	} else {
		screen.innerText =
			firstNum.join("") + operatorSelect + secondNum.join("");
	}
}
//operator buttons
function operatorClick(event) {
	console.log(event);
	if (operatorSelect.length !== 0) {
		buttonEqualsClick();
		operatorSelect[0] = event.target.innerText;
	} else {
		for (const operator of operators) {
			operatorSelect[0] = event.target.innerText;
		}
	}
	updateScreen();
}
//number buttons
function numClick(event) {
	if (operatorSelect.length === 0) {
		firstNum.push(event.target.innerText);
	} else {
		secondNum.push(event.target.innerText);
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
		updateScreen();
		//Checking secondNum if there is a decimal
	} else {
		//If no decimal, add decimal
		if (num2decimalCheck === false) {
			secondNum.push(`.`);
		}
		//If YES decimal, display what is already there
		updateScreen();
	}
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
