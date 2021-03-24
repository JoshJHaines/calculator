/*************
 * DATA SETS *
 *************/
const firstNum = [];
const secondNum = [];
const operatorSelect = [];
let solution = 0;

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
//screen
const screen = document.getElementById("screen");

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
	if (operatorSelect.length === 0) {
		firstNum.push(1);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(1);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button2Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(2);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(2);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button3Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(3);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(3);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button4Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(4);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(4);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button5Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(5);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(5);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button6Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(6);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(6);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button7Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(7);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(7);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button8Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(8);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(8);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button9Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(9);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(9);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function button0Click() {
	if (operatorSelect.length === 0) {
		firstNum.push(0);
        screen.innerText = firstNum.join("") * 1
	} else {
		secondNum.push(0);
        screen.innerText = secondNum.join("") * 1
	}
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("SecondNum:", secondNum.join("") * 1);
}
function buttonDecimalClick() {
	console.log(`.`);
}
//operator buttons
function buttonPlusClick() {
	operatorSelect[0] = `+`;
	console.log(operatorSelect);
}
function buttonMinusClick() {
	operatorSelect[0] = `-`;
	console.log(operatorSelect);
}
function buttonMultiplyClick() {
	operatorSelect[0] = `*`;
	console.log(operatorSelect);
}
function buttonDivideClick() {
	operatorSelect[0] = `/`;
	console.log(operatorSelect);
}
function buttonEqualsClick() {
	if (operatorSelect.length !== 0) {
        if (operatorSelect[0] === "+") {
            solution = firstNum.join("") * 1 + secondNum.join("") * 1;
        }
        if (operatorSelect[0] === "-") {
            solution = firstNum.join("") * 1 - secondNum.join("") * 1;
        }
        if (operatorSelect[0] === "*") {
            solution = firstNum.join("") * 1 * secondNum.join("") * 1;
        }
        if (operatorSelect[0] === "/") {
            solution = ((firstNum.join("") * 1) / secondNum.join("")) * 1;
        } 
	} else {
        solution = console.log(firstNum.join("") * 1);;
    }

    screen.innerText = solution
	console.log(solution);
}
function buttonClearClick() {
	firstNum.splice(0);
	secondNum.splice(0);
	operatorSelect.splice(0);
	console.log("FirstNum:", firstNum.join("") * 1);
	console.log("Operator:", operatorSelect.join(""));
	console.log("SecondNum:", secondNum.join("") * 1);
}
