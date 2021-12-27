const { MessageEmbed } = require("discord.js");

module.exports = {
    name : 'ban', //command name
    description : `Bans a member`,
    run: async(client,  message, args) =>{
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.chanel.send(new MessageEmbed()
        .setTitle('ERRORS!')
        .setDescription('I do not have the correct permissions to do that. \n\nMake sure that my roles is above the others and that\n I have the KICK_MEMBERS permissions enabled.')
        .setColor('RED')
        );
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send(new MessageEmbed() 
        .setTitle('ERRORS!')
        .setDescription('Please specify someone to ban!')
        .setColor('RED')
        );
        await Member.kick({reason : args.slice(1).join(" ")})
        message.channel.send(new MessageEmbed()
        .setTitle('Success!')
        .setDescription(`Moderator: ${message.author.username} successfully banned ${Member.user.tag}`)
        .setColor('GREEN')
        );
}}