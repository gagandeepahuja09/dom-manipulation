'use strict'

/* console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉 Correct Number!'
document.querySelector('.number').textContent = 50
document.querySelector('.score').textContent = 30
document.querySelector('.guess').value = 25 */

// DOM: Structured representation of HTML documents. Allows JS to access HTML elements
// and styles to manipulate them.
// Whenever we get something from dom manipulation, it's usually in the form of string

// DOM methods and properties are not a part of JS
// They are a part of web APIs which browsers implement and we can acces them
// in JS code.

let score = 20

const secretNum = Math.trunc(Math.random() * 20 + 1)

document.querySelector('.check').addEventListener('click', () => {
  const guessedNum = Number(document.querySelector('.guess').value)
  console.log(guessedNum, secretNum)
  if (!guessedNum) {
    document.querySelector('.message').textContent = '⛔️ No number entered!'
  } else if (guessedNum === secretNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number!'  
  } else if (guessedNum > secretNum) {
    score = Math.max(score - 1, 0)
    document.querySelector('.message').textContent = (score === 0) 
    ? '🧨 Sorry You Lost the Game! Better Luck Next Time' :
    '📈 Too High!'
  } else {
    score = Math.max(score - 1, 0)
    document.querySelector('.message').textContent = (score === 0) 
    ? '🧨 Sorry You Lost the Game! Better Luck Next Time' :
    '📉 Too Low!'
  }
  document.querySelector('.score').textContent = score
})