// function calc(celsius) {
//   celsius = ((fahrenheit - 32) * 5) / 9
//   fahrenheit = (celsius * 9) / 5 + 32
//   return fahrenheit
// }
// console.log(fare)

// function calc(celsius, fahrenheit) {
//   celsius = ((fahrenheit - 32) * 5) / 9
//   fahrenheit = (celsius * 9) / 5 + 32
//   console.log(fahrenheit)
//   console.log(celsius)
// }

function calcC(fahrenheit) {
  celsius = ((fahrenheit - 32) * 5) / 9
  console.log(celsius)
}

// function calcF(celsius) {
//   fahrenheit = (celsius * 9) / 5 + 32
//   console.log(fahrenheit)
// }

window.onload = function () {
  let btn = document.getElementById('button')
  btn.onclick = function () {
    let celsius = document.getElementById('celsius').value
    let fahrenheit = document.getElementById('fahrenheit').value
    calcC(fahrenheit)
  }
}
