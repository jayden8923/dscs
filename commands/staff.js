const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'staff',
    description: 'PLEASE BE MY SEX SLAVE!!',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      const generalroleid = message.guild.roles.cache.find(role => role.name === 'General').members;
      const oligarch = message.guild.roles.cache.find(role => role.name === 'Oligarch').members;
      const council = message.guild.roles.cache.find(role => role.name === 'The Council').members;
      
      const embed = new d.MessageEmbed().setTitle('Staff');
      generalroleid.forEach(general => {
        if (args.length && args[0] == 'mobile')
        embed.addField('General', general.user.tag, true);
        else embed.addField('General', general.user.tag);
      });  
      oligarch.forEach(general => {
        if (args.length && args[0] == 'mobile')
          embed.addField('Oligarch', general.user.tag, true);
        else embed.addField('Oligarch', general.user.tag);
      });
      council.forEach(general => {
        if (args.length && args[0] == 'mobile')
          embed.addField('Council', general.user.tag, true);
        else embed.addField('Council', general.user.tag);
      });
      message.channel.send(embed);
      }
}