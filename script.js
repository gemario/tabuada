function tabuada() {
  let num = document.getElementById('txtN')
  let tab = document.getElementById('selTab')

  if (num.value.length == 0) {
    alert('Por favor, digite um número!')
  } else {
    let number = Number(num.value)
    let contador = 1
    tab.innerHTML = ''
    while (contador <= 10) {
      let item = document.createElement('option')
      item.text = `${number} x ${contador} = ${number * contador}`
      item.value = `tab${contador}`
      tab.appendChild(item)
      contador++
    }
  }
}
