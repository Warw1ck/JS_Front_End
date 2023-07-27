function solve() {
  const text = document.querySelector('#input').value.split('.').filter((sentence)=>{
    if (sentence) {
      return sentence
      
    }
  })
  let result = []
  for (let index = 0; index < text.length; index+=3) {

    if (index+2 <text.length) {
      result.push(`${text[index]}. ${text[index+1]}. ${text[index+2]}.`)
    
    }else if (index+1 <text.length) {
      result.push(`${text[index]}. ${text[index+1]}.`)
    
    }else{
      result.push(`${text[index]}.`)
    }
    
    
  }

  for (const element of result) {
    document.querySelector('#output').innerHTML += `<p>${element}</p>`
  }
}