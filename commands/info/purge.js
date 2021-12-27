const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'purge',
    description : 'Deletes an amount of messages',
    aliases : ['purge'],
    run : async(client, message, args) =>{
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(new MessageEmbed()
        .setDescription('Seems like you do not have the correct permissions to use this command.')
        .setColor('RED')
        );
        if(!args[0]) return message.channel.send(new MessageEmbed()
        .setDescription('Please speicfy an amount of messages to delete!')
        .setColor('RED')
        );
        if(isNaN(args[0])) return message.channel.send('Only numbers are allowed')
        if(parseInt(args[0]) > 99) return message.channel.send(new MessageEmbed()
        .setDescription('The max amount of numbers that you can delete is 99!')
        .setColor('RED')
        );
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
        .catch(err => console.log(err))
        message.channel.send(new MessageEmbed()
        .setColor('RED')
        .setDescription(`Successfully deleted ${args[0]} messages!`)
        ).then(m => m.delete({ timeout : 5000}))
    }
}