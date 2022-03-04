const fetchLocalStorage = () => {
  const data = getCard()
  for (const product in data) {
    displayProduct(product)
  }
}

const addToCard = () => {
  const fieldName = document.getElementById('cardText')
  const name = fieldName.value
  if (!name) {
    return
  }
  // show product
  displayProduct(name)
  // add to localStorage
  addToLocalStore(name)
  fieldName.value = ''
}

const displayProduct = (name) => {
  const showProduct = document.getElementById('show-order')
  const li = document.createElement('li')
  li.innerText = name
  showProduct.appendChild(li)
}

const addToLocalStore = (name) => {
  const card = getCard()
  console.log(card)
  if (card[name]) {
    card[name] = card[name] + 1
  } else {
    card[name] = 1
  }
  const cardStringfy = JSON.stringify(card)
  localStorage.setItem('card', cardStringfy)
}

const getCard = () => {
  const card = localStorage.getItem('card')
  let cardObj
  if (card) {
    cardObj = JSON.parse(card)
  } else {
    cardObj = {}
  }
  return cardObj
}

const placeOrder = () => {
  document.getElementById('show-order').textContent = ''
  localStorage.removeItem('card')
}
fetchLocalStorage()
