const display = document.getElementById("display");

function appendTodisplay(input) {
  const display = document.getElementById("display");
  // input.value += input;
  display.value += input;
}

// function appendTodisplay(input) {
//     const display = document.getElementById("display");
//     display.value += input;
// }

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

// function calculate() {
//     const display = document.getElementById("display");
//     try {
//         display.value = eval(display.value)

//     } catch (error) {
//         display.value = "error"
//     }

// }

alert("welcome to the Calculator ;)");

function calculate() {
  console.log("Calculate function called.");
  const display = document.getElementById("display");
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "😤kuch bhi😡";
  }
}
