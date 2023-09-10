const memolist = document.getElementById("memolist")
const saveButton = document.getElementById("input-button")
const inputField = document.getElementById("input-text")

let lol = ""
inputField.onchange = function (e) {
  lol = e.target.value
  console.log(lol)
}

saveButton.onclick = function () {
  console.log(lol)
  const card = document.createElement("div")
  card.id = "memocard"

  const content = document.createElement("div")
  content.id = "cardcontent"
  content.textContent = lol
  card.appendChild(content)
  memolist.appendChild(card)
}
