const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'unlockdown',
    description: 'description',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      if (message.author.id !== jID && !message.member.hasPermission('ADMINISTRATOR')) return message.reply('niggeber!!!!!!!!');
      
      const peasent = '714265338769834063',
            peasant = peasent;
      message.guild.channels.cache.forEach(channel => channel.updateOverwrite(peasant, { SEND_MESSAGES: true }));
  }
}