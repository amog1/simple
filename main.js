// Simple Addition CAlculator

// Btn event listner
document.getElementById("btn").addEventListener("click", btnclicked);

// Evnet function

function btnclicked() {
  // input
  let in1 = +document.getElementById("num1").value;
  let in2 = +document.getElementById("num2").value;

  // processs
  let total = in1 + in2;

  // Output

  document.getElementById("output").innerHTML = total;
}
