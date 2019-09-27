/**
 * @title Rock-Paper-Scissors-Spock-Lizard
 * @description The user chooses which one to take, and then the computer 
 * opponent chooses also one at random. The winner (or draw) is shown.
 * @link More info: http://www.samkass.com/theories/RPSSL.html
 */

'use strict'

const fs = require('fs')


const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const process = data =>
    data.replace(/^\s*\n/gm, '').split('\n').map(line => line.split(' '))

const findWinner = (priorities, uMove, cMove) => {
    if (uMove === cMove) return 'draw'

    for (let i = 0; i < priorities.length; i++)
        if (priorities[i][0] === cMove && priorities[i][1] === uMove)
            return 'computer'
    return 'user'
}

const gestures = ['rock', 'paper', 'scissors', 'spock', 'lizard']
const uMove = 'rock' // user's move
const cMove = gestures[getRandomInt(0, 4)] // computer's move

const data = fs.readFileSync('winners.txt', 'utf8')
const priorities = process(data)

const winner = findWinner(priorities, uMove, cMove)

console.log(`
    Computer plays ${cMove}
    User plays ${uMove}`)

if (winner === 'draw')
    console.log(`
    Draw!
    `)
else
    console.log(`
    Today the winner is ${ winner }
    `)
