/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  return number1 + number2;
}

function addNumbers() {
  let add1 = Number(document.getElementById("add1").value);
  let add2 = Number(document.getElementById("add2").value);
  sumResult = add(add1, add2);
  console.log("Hola soy +");
  //value to an element
  return (document.getElementById("sum").value = sumResult);
}

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  let subtract1 = Number(document.querySelector("#subtract1").value);
  let subtract2 = Number(document.querySelector("#subtract2").value);
  console.log("soy resta perri");
  return (document.querySelector("#difference").value = subtract(
    subtract1,
    subtract2
  ));
};

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => {
  return number1 * number2;
};

const multiplyNumbers = () => {
  let factor1 = Number(document.getElementById("factor1").value);
  let factor2 = Number(document.querySelector("#factor2").value);
  console.log("Soy Multi Multi")
  return document.querySelector("#product").value = multiply(factor1, factor2); 
};

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) =>{
    return number1 / number2;
}

const divideNumbers = function(){
    let dividend = Number(document.getElementById("dividend").value)
    let divisor = Number(document.getElementById("divisor").value)
    console.log("I am dividiendo")
    return document.getElementById("quotient").value = divide(dividend,divisor);
}

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)


/* Decision Structure */

const calculateSubtotal = () => {
    let subtotalInput = Number(document.getElementById("subtotal").value)
    let memberCheckbox = document.getElementById("member");
    let totalSpan = document.querySelector("#total");
    let subtotal = parseFloat(subtotalInput)
    subtotal *= memberCheckbox.checked ? 0.8 : 1;
    console.log(subtotal)
    //Span does not hav a value
    return totalSpan.textContent = `$${subtotal.toFixed(2)}`;
}

document.getElementById("getTotal").addEventListener("click", calculateSubtotal)
/* ARRAY METHODS - Functional Programming */
myArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
for (let i = 0; i < myArray.length; i++)
{
    console.log(myArray[i])
}
/* Output Source Array */
//Here I am setting a value property to an input element or a textarea, so ai need to convert the array into a string
document.getElementById("array").textContent = myArray.join(", "); 

/* Output Odds Only Array */
const odds = myArray.filter((number) => number % 2 === 1)
document.querySelector("#odds").textContent = odds;

/* Output Evens Only Array */
const even = myArray.filter((number) => number % 2 !== 1);
document.querySelector("#evens").textContent = even;

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/* Output Multiplied by 2 Array */
// const multipliedArray = myArray.map( (number) => { return number * 2 })
// document.querySelector("#multiplied").textContent = multipliedArray;
document.querySelector("#multiplied").textContent = myArray.map( (number) => { return number * 2 });

/* Output Sum of Multiplied by 2 Array */
document.getElementById("sumOfMultiplied").textContent = myArray.map( (number) => { return number * 2 }).reduce((accumulator, currentValue) =>accumulator + currentValue, 0);

