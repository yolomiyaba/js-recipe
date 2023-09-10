// 親要素を取得
const buttons = document.getElementById("buttons")
const element = document.getElementById("element")
// buttons の最初の（＝0番目の）子要素を取得
//const button0 = buttons.children[0]

let flg = true
buttons.onclick = function () {
  if (flg === true) {
    element.textContent = "こんばんは"
    element.style.fontWeight = "bold"
    element.classList.add("nice")
    flg = false
  } else {
    element.textContent = "hello"
    flg = true
  }

  const cardsContainer = document.getElementById("element")

  const card = document.createElement("div")
  card.textContent = "こんばんは"

  cardsContainer.appendChild(card)
}
