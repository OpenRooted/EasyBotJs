# EasyBotJs
This is a concept bot building technology for Discord Owners to make a discord bot within minutes with 100% customization and Open Source for Bot Developers to be more handly with customization.

## How to run the bot?
- open the bot.js file 
```javascript
const TOKEN = 'your_bot_token';

let { BOT } = require('./index')

let commands = ["ping"]

let bot = new BOT(TOKEN);

async function start() {
    await bot.commandHandler(commands);

    bot.login()
}

start();
```
Replace the TOKEN with your bot's token and run the bot.js file.

For Customization look in `cofig.json` and commands Array in `bot.js` file.

### CopyRight **@OpenRooted 2023** under MIT LICENSE.
