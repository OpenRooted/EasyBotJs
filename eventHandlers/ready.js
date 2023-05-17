const { REST, Routes } = require('discord.js');
require('colors');

exports.ready = async (token, client, commands) => {
    try {
        const rest = new REST({ version: '10' }).setToken(token);

        console.log('[+] Started refreshing application '.green + `(/) `.blue + `commands.`.green);
      
        await rest.put(Routes.applicationCommands(client.user.id), { body: commands });
      
        console.log('[+] Successfully reloaded application '.green + `(/) `.blue + `commands.`.green);

        console.log(`[+] Logged in as `.green + `${client.user.tag}!`.blue);
    } catch (error) {
        console.error(`[-] ${error.message}`.red);
    }
}