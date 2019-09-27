/**
 * @title Rock-Paper-Scissors-Spock-Lizard
 * @description The user chooses which one to take, and then the computer 
 * opponent chooses also one at random. The winner (or draw) is shown.
 * @link More info: http://www.samkass.com/theories/RPSSL.html
 */

'use strict'

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const findWinner = ({ uMove, cMove }) => {
    if (uMove == cMove) return 'draw'

    const gestures = {
        rock: [1, 3, 5],
        paper: [2, 1, 4],
        scissors: [3, 2, 5],
        spock: [4, 1, 3],
        lizard: [5, 2, 4]
    }

    const uNumber = gestures[uMove]
    const cNumber = gestures[cMove]

    for (let i = 0; i < uNumber.length; i++)
        if (uNumber[i] === cNumber[0]) return 'user'

    return 'computer'
}

const gestures = ['rock', 'paper', 'scissors', 'spock', 'lizard']
const uMove = 'rock' // user's move
const cMove = gestures[getRandomInt(0, 4)] // computer's move

/**
 * Rock     135
 * Paper    214
 * Scissors 325
 * Spock    413
 * Lizard   524
 * 
 * The winner is number which contains the looser's first digit
 * @example 1[3]5 -> 325 => Rock -> Scissors
 * @example 413 <- 52[4] => Spock <- Lizard
 */

const winner = findWinner({ uMove, cMove })

console.log(`
    Computer plays ${cMove}
    User plays ${uMove}
    Today the winner is ${winner}
`)
