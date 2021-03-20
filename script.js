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

// When we manipulate CSS styles using document.querySelector().style then we are not
// changing the css files. We are adding inline styles which will affect inside the
// html tag

let score = 20

let secretNum = Math.trunc(Math.random() * 20 + 1)

const resetScore = () => {
  score = 20
  document.querySelector('.score').textContent = score
  // generate secretNum
  secretNum = Math.trunc(Math.random() * 20 + 1)
  // remove the guessed value
  document.querySelector('.guess').value = null
  // black color
  document.querySelector('body').style.backgroundColor = '#222'
  // normal width
  document.querySelector('.number').style.width = '16rem'
  // remove the secret num
  document.querySelector('.number').textContent = '?' 
  // message change
  document.querySelector('.message').textContent = 'Start guessing...'
}

document.querySelector('.check').addEventListener('click', () => {
  const guessedNum = Number(document.querySelector('.guess').value)
  console.log(guessedNum, secretNum)
  if (!guessedNum) {
    document.querySelector('.message').textContent = '⛔️ No number entered!'
  } else if (guessedNum === secretNum) {
    // setTimeout(resetScore, 5000)
    document.querySelector('.message').textContent = '🎉 Correct Number!'
    document.querySelector('body').style.backgroundColor = '#60b347'
    document.querySelector('.number').style.width = '32rem' 
    document.querySelector('.number').textContent = guessedNum.toString()
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

document.querySelector('.again').addEventListener('click', () => {
  // show 20 score
  resetScore()
})