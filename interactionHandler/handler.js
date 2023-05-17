exports.handler = async(interaction, client) => {
    if (interaction.commandName === 'ping') {
       require('./commands/utils/ping').ping(interaction, client);
    }
}