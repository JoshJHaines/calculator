/*************
 * DATA SETS *
 *************/
const firstNum = []
const secondNum = []
const operatorSelect = []

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
 button1.addEventListener("click", testClick);
 button2.addEventListener("click", testClick);
 button3.addEventListener("click", testClick);
 button4.addEventListener("click", testClick);
 button5.addEventListener("click", testClick);
 button6.addEventListener("click", testClick);
 button7.addEventListener("click", testClick);
 button8.addEventListener("click", testClick);
 button9.addEventListener("click", testClick);
 button0.addEventListener("click", testClick);
 buttonDecimal.addEventListener("click", testClick);

 //operators
 buttonPlus.addEventListener("click", operatorSelector);
 buttonMinus.addEventListener("click", operatorSelector);
 buttonMultiply.addEventListener("click", operatorSelector);
 buttonDivide.addEventListener("click", operatorSelector);
 buttonEquals.addEventListener("click", operatorSelector);
 buttonClear.addEventListener("click", operatorSelector);


/********************
 * HELPER FUNCTIONS *
 ********************/

function testClick(){
    console.log("Did this work?")
}

function operatorSelector(){
    console.log("Operator Used")
    operatorSelect[0] = "*"
    console.log(operatorSelect)
}