const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'clearwarns',
    description: 'Remove all warns for a member.',
    aliases: ['clearwarnings'],
    execute: async (message, args, client, db, gm) => {  
      if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('you do not have permission to do that!');
      if (!message.mentions.members.first()) return message.channel.send('Invalid member!');

      for (let warn of db.get('warns_' + message.guild.id)) {
        let warnNumber = parseInt(args[0]) || args[0];
        if (warn.warnedID !== message.author.id && message.guild.members.cache.get(warn.warnedID).roles.highest.position < message.member.roles.highest.position && message.guild.members.cache.get(warn.warnedID).roles.highest.position != message.member.roles.highest.position) {
          db.set('warns_' + message.guild.id, db.get('warns_' + message.guild.id).filter(warn => warn.warnedID !== message.mentions.users.first().id));
          message.channel.send('Removed warns for that member!');
return;
        }
      }
      return message.channel.send('You do not have permissions to remove these warns!');
  
}
}