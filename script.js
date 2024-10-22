let value   = ""; 
let symbol  = "";
let display = document.getElementById('result');


function Num(val){
    // debugger;
    value +=val;
    display.innerHTML= (value);
    console.log(value)
}

function Result(){
    answer=eval(value);
    display.innerHTML=(answer)
}

function Clear(){
    value="";
    display.innerHTML=(value)
}


// let display = document.getElementById('display');
//   let currentInput = '';

//   function appendToDisplay(value) {
//     currentInput += value;
//     display.value = currentInput;
//   }
// function clearDisplay() {
//     currentInput = '';
//     display.value = '';
//   }

//   function operate(operator) {
//     appendToDisplay(operator);
//   }
// function calculateResult() {
//     try {
//       currentInput = eval(currentInput);
//       display.value = currentInput;
//     } catch (error) {
//       display.value = 'Error';
//     }
//   }

/* <button onclick="appendToDisplay('0')">0</button>
<button onclick="operate('/')">/</button>
<button onclick="calculateResult()">=</button> */