const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'report',
    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) =>{
        const owner = client.users.cache.get('903747010157490196');

        const query = args.join(" ");
        if(!query) return message.reply('Please specify a query.')


        const reportEmbed = new MessageEmbed()
        .setTitle('New BUG!')
        .addField('Author', message.author.tag, true)
        .addField('User ID', message.author.id, true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({ dynamic : true}))
        .setTimestamp();

        owner.send(reportEmbed)
    }
}