const memolist = document.getElementById("memolist")
const saveButton = document.getElementById("input-button")
const inputField = document.getElementById("input-text")

let text = ""
let localMemo = localStorage.getItem("memo")
let memo = []
if (localMemo) {
  memo = JSON.parse(localStorage.memo)
  console.log(memo)
  for (let i = 1; i < memo.length; i++) {
    console.log(memo[i])
    text = memo[i]
    createMemo
  }
}

inputField.onchange = function (e) {
  text = e.target.value
  console.log(text)
}

saveButton.onclick = function () {
  console.log(text)
  const card = document.createElement("div")
  card.id = "memocard"

  const content = document.createElement("div")
  content.id = "cardcontent"
  content.textContent = text
  card.appendChild(content)
  memolist.appendChild(card)
  memo.push(text)
  localStorage.memo = JSON.stringify(memo)
}

const createMemo = function () {
  const card = document.createElement("div")
  card.id = "memocard"

  const content = document.createElement("div")
  content.id = "cardcontent"
  content.textContent = text
  card.appendChild(content)
  memolist.appendChild(card)
}
