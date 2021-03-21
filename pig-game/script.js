'use strict';


const totalScoreP1 = document.querySelector('#score--0')
const totalScoreP2 = document.querySelector('#score--1')
const activePlayer = document.querySelector('.player--active')
const player1 = document.querySelector('.player--0')
const player2 = document.querySelector('.player--1')
const diceRollBtn = document.querySelector('.btn--roll')
const holdBtn  = document.querySelector('.btn--hold')
const diceImg  = document.querySelector('.dice')
const newGameBtn = document.querySelector('.btn--new')

let p1Score = 0
let p2Score = 0
let currScoreP1 = 0
let currScoreP2 = 0

let isP1Active = (
  document.querySelector('.player--0') === document.querySelector('.player--active')
)

let gameEnded = false

const generateRandomDieNum = () => {
  return (Math.trunc(Math.random() * 6) + 1) 
}

const resetGame = () => {
  p1Score = p2Score = currScoreP1 = currScoreP2 = 0
  document.querySelector('.player--winner').classList.remove('player--winner')
}

const swapDirections = () => {
  if (isP1Active) {
    player1.classList.remove('player--active')
    player2.classList.add('player--active')
  } else {
    player2.classList.remove('player--active')
    player1.classList.add('player--active')
  }
  const currScoreSelector =  (isP1Active) ? '#current--0' : '#current--1'
  document.querySelector(currScoreSelector).textContent = '0'
  isP1Active = !isP1Active
  // reset current score
}

const rollDice = () => {
  if (gameEnded) {
    return
  }
  const generateNum = generateRandomDieNum()
  // set the image according to the random number generated
  diceImg.src = `dice-${generateNum}.png`
  // add to the current score of the current player if not equal to 1
  let currScoreSelector = '#current--0'
  let currentScore = currScoreP1
  if (isP1Active) {
    currScoreP1 += generateNum
    currentScore = currScoreP1
  } else {
    currScoreSelector = '#current--1'
    currScoreP2 += generateNum
    currentScore = currScoreP2
  }
  console.log({ currScoreP1, currScoreP2, currentScore, generateNum, isP1Active })
  if (generateNum != 1) {
      document.querySelector(currScoreSelector).textContent = currentScore.toString()
  } else {
    // swap directions
    swapDirections()
  }
}

diceRollBtn.addEventListener('click', rollDice)
holdBtn.addEventListener('click', () => {
  if (gameEnded) {
    return
  }
  // add currentScore to the total score
  let totalScore = 0
  let totalScoreSelector = '#score--0'
  if (isP1Active) {
    p1Score += currScoreP1
    totalScore = p1Score
  } else {
    p2Score += currScoreP2
    totalScore = p2Score
    totalScoreSelector = '#score--1'
  }
  document.querySelector(totalScoreSelector).textContent = totalScore.toString()
  if (totalScore >= 100) {
    gameEnded = true
    activePlayer.classList.add('player--winner')
  }
  currScoreP1 = currScoreP2 = 0
  // swap directions
  swapDirections()
})

newGameBtn.addEventListener('click', resetGame)