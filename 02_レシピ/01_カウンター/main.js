let number = 0
const numberLabel = document.getElementById("display")
const plusButton = document.getElementById("plus-button")

const increase = function () {
  number += 1
}

plusButton.onclick = function () {
  increase()
  numberLabel.textContent = number
}
