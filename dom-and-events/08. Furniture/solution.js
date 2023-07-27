function solve() {
  const buttonGenerate = document.querySelectorAll('button')[0]
  const buttonBuy = document.querySelectorAll('button')[1]
  const tables = document.querySelector('tbody')
  buttonBuy.addEventListener('click', buyProducts, true)
  buttonGenerate.addEventListener('click', generate, true)
  function generate() {
    const data = document.querySelectorAll('textarea')[0]
    const products = JSON.parse(data.value)

    for (const product of products) {
        tables.innerHTML += `<tr>
        <td>
            <img
                src=${product.img}>
        </td>
        <td>
            <p>${product.name}</p>
        </td>
        <td>
            <p>${product.price}</p>
        </td>
        <td>
            <p>${product.decFactor}</p>
        </td>
        <td>
            <input type="checkbox" />
        </td>
        </tr>`
      
    }

  
  }
  function buyProducts(){
    const result = document.querySelectorAll('textarea')[1]
    const data = document.querySelectorAll('input:checked')
    let totalPrice = []
    let allFurniture = []
    let averageFactor = []

    for (let productsData of data) {
      productsData = productsData.parentElement.parentElement
      totalPrice = totalPrice.concat([...productsData.querySelectorAll('tr td:nth-child(3)')])
      allFurniture = allFurniture.concat([...productsData.querySelectorAll('tr td:nth-child(2)')])
      averageFactor = averageFactor.concat([...productsData.querySelectorAll('tr td:nth-child(4)')])
    }
    
    console.log(totalPrice)
    result.value = `Bought furniture: ${allFurniture.map(x => x.innerText).join(', ')}\nTotal price: ${(totalPrice.map(x => Number(x.innerText)).reduce(function(a, b){return a + b})). toFixed(2)}\nAverage decoration factor: ${averageFactor.map(x => Number(x.innerText)).reduce(function(a, b){return a + b})/averageFactor.length}`

  }
}