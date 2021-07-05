let cn1;
let cn2;

function writeToDiv() {
  let inputData = document.getElementById('text01').value;
  document.getElementById('output01').innerHTML = inputData;
  console.log("This writes the text in box unto a div below");
}

function triNum(num) { //5
  let i = 0;
  let result = 0;
  while (num > i) { //5 > 1
    
    result += num - i; // 5 + 4
    
    i++; //2
  }
  document.getElementById('output02').innerHTML = result;

  return result;
}

function getCalcData() {
  cn1 = parseFloat(document.getElementById('calcNum01').value);
  cn2 = parseFloat(document.getElementById('calcNum02').value);
}

function addTwo() {
  getCalcData();
  document.getElementById('output03').innerHTML = cn1 + cn2;
  return cn1 + cn2;
}
const multiply = () => {
  getCalcData();
  document.getElementById('output03').innerHTML = cn1 * cn2;
};

var divide = function () {
  getCalcData();
  document.getElementById('output03').innerHTML = (cn1 / cn2).toFixed(2);
};

const mean = (a) => {
  document.getElementById('output03').innerHTML = a / 2
};

//For the Arguments section
function arguments(){
  return arguments;
}

console.log(arguments(1,2,3,4,5));
console.log(arguments('hello', NaN));

//default parameters

function discount(price, amount=10) {
  return price*(100-amount)/100;
}

console.log("the answer is " + discount(20));
console.log("the answer is " + discount(20, 15));

//arrow functions
const square = x => x * x;

const hello = () => alert('Hello World!');  
console.log(square(8));
console.log(hello);           //This one doesn't work and I don't know why

function changeDOM() {
  document.getElementById("practice").style.color = "red";
  document.getElementById("practice").innerHTML = "This paragraphs innerHTML is now changed, you can also change the style color too.";
}
