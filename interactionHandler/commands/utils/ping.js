const { EmbedBuilder } = require('discord.js');
const config = require('../../../config.json')

exports.ping = async (interaction, client) => {

    const Embed = new EmbedBuilder()
        .setColor('Random')
        .setTitle(`**Ping Pong!**`)
        .setDescription('💻 API Latency: ' + '`' + `${Math.round(client.ws.ping)}ms` + '`')

    await interaction.reply({
        embeds: [Embed],
        ephemeral: config.ephemeralEmbeds.ping
    });
}