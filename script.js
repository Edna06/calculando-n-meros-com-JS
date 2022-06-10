alert('insira dois números para calcularmos')

let numberOne = prompt('insira o primeiro número')
let numberTwo = prompt('insira o segundo número')

//transformando a string em number

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

//organizando os cálculos

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('A soma dos números é: ' + sum)
alert('A subtração dos números é: ' + sub)
alert('A multiplicação dos números é: ' + mult)
alert('A divisão dos números é: ' + div)
alert('O resto da divisão é: ' + restDiv)

// Verificar se o númeor é impar ou par

if (sum % 2 == 0) {
  alert('O número é par')
} else {
  alert('O número é impar')
}

//verificar se os números são iguais

let result = numberOne == numberTwo

if (result) {
  alert('Os números inseridos são iguais')
} else {
  alert('Os números inseridos são diferentes')
}
