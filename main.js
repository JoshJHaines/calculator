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

function button1Click(){
    console.log(1)
}
function button2Click(){
    console.log(2)
}
function button3Click(){
    console.log(3)
}
function button4Click(){
    console.log(4)
}
function button5Click(){
    console.log(5)
}
function button6Click(){
    console.log(6)
}
function button7Click(){
    console.log(7)
}
function button8Click(){
    console.log(8)
}
function button9Click(){
    console.log(9)
}
function button0Click(){
    console.log(0)
}
function buttonDecimalClick(){
    console.log(`.`)
}