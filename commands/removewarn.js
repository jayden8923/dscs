const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'removewarn',
    description: 'Remove a warn by the warn number.',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you do not have permission to do that!');
      if (!parseInt(args[0])) return message.channel.send('Invalid number!');
      const removeArray = (arr, value) => { return arr.filter(function(ele){ return ele != value });};
      for (let warn of db.get('warns_' + message.guild.id)) {
        let warnNumber = parseInt(args[0]) || args[0];
        if (warn.number === warnNumber && warn.warnedID !== message.author.id && message.guild.members.cache.get(warn.warnedID).roles.highest.position < message.member.roles.highest.position && message.guild.members.cache.get(warn.warnedID).roles.highest.position != message.member.roles.highest.position) {
          db.set('warns_' + message.guild.id, db.get('warns_' + message.guild.id).filter(warn => warn.number !== warnNumber));
          message.channel.send('Removed warn #' + args[0]);
           return;
        }
      }
      return message.channel.send('Invalid warn or you do not have permission to remove this warn!');
  }
}