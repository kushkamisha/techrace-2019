'use strict'

require('dotenv').config()
const math = require('mathjs')
const TelegreamBot = require('node-telegram-bot-api')

const token = process.env.TELEGRAM_TOKEN
const bot = new TelegreamBot(token, { polling: true })

const calculate = msg => {
    const symbols = /[0123456789+\-*/^ ]/g
    if (msg.match(symbols))
        if (msg.match(symbols).length === msg.length)
            // Math equation
            return math.evaluate(msg)
}

bot.on('message', msg => {
    const message = msg.text
    const result = calculate(message)
    const answer = result === undefined ?
        'Try to write a math equation' :
        `${message} = ${result}`
    bot.sendMessage(msg.chat.id, answer)
})
