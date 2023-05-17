require('colors');
const { Client, GatewayIntentBits } = require('discord.js');

exports.BOT = class BOT {
    constructor(token) {
        if(!token) return console.log('[-] No Token was provided.'.red);

        this.token = token;
    }

    async commandHandler(cmds) {
        if (!Array.isArray(cmds)) return `[-] Commands Provided must be a array`

        let commands = await require('./commandHandler').commands(cmds)

        this.commands = commands
    }

    async login() {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });

        client.on('ready', async() => {
           require('./eventHandlers/ready').ready(this.token, client, this.commands);
        });

        client.on('interactionCreate', async interaction => {
            if (!interaction.isChatInputCommand()) return;
            require('./interactionHandler/handler').handler(interaction, client);
        });

        client.login(this.token);
    }
}





