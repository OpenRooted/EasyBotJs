const TOKEN = 'your_bot_token';

let { BOT } = require('./index')

let commands = ["ping"]

let bot = new BOT(TOKEN);

async function start() {
    await bot.commandHandler(commands);

    bot.login()
}

start();