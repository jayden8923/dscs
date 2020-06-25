const jID = require('../ownerid.js');
const d = require('discord.js');
module.exports = {
    name: 'avatar',
    description: 'I\'m gonna say the N WORD!!!!',
    aliases: [],
    execute(message, args, client, db, gm) {  
      if (!message.mentions.users.size) {
      message.channel.send(new d.MessageEmbed().setImage(message.author.displayAvatarURL({ dynamic: true })));
      } else {
      message.channel.send(new d.MessageEmbed().setImage(message.mentions.users.first().displayAvatarURL({ dynamic: true })));
      }
  }
}