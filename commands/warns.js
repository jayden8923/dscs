const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'warns',
    description: 'Get warns of entire server or specific player',
    aliases: [],
    execute: async (message, args, client, db, gm) => {  
          const warns = db.get('warns_' + message.guild.id) || null;
        if (!message.mentions.members.first()) {
            let embed = new d.MessageEmbed().setTitle('Server Warns');
          if (warns) {
            warns.forEach(warn => embed.addField(message.guild.members.cache.get(warn.warnedID).user.tag, `Reason:  ${warn.reason}, Number: #${warn.number}`));
          }
            return message.channel.send(embed);
        } else {
          let embed = new d.MessageEmbed().setTitle(`${message.mentions.members.first().displayName}'s Warns`);

          if (warns) {
            warns.forEach(warn => {
              if (warn.warnedID !== message.mentions.users.first().id) return console.log('NOT A WARN!');
              else  embed.addField(message.guild.members.cache.get(warn.warnedID).user.tag, `Reason:  ${warn.reason}, Number: #${warn.number}`);
            });
          }
            return message.channel.send(embed);
        }
      }
  }